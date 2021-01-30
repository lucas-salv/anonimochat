const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "https://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

// variables
var queue = [];    // list of sockets waiting for peers
var rooms = {};    // map socket.id => room
var names = {};    // map socket.id => name
var allUsers = {}; // map socket.id => socket

const findPeer = (socket) => {
    if(queue.length > 0) {
        const peer = queue.pop();
        const room = socket.id + '#' + peer.id;

        peer.join(room);
        socket.join(room);
        rooms[peer.id] = room;
        rooms[socket.id] = room;

        peer.emit('start', { nickname: names[socket.id], room });
        socket.emit('start', { nickname: names[peer.id], room });
    } else {
        queue.push(socket);
        socket.emit('queue', { message: 'Você está na fila de espera. Logo, logo você será conectado com alguém' });
    }
}

io.on('connection', socket => {
    console.log('user-> ' + socket.id + ' connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
        socket.emit('leave room');
    })

    socket.on('login', data => {
        names[socket.id] = data.nickname;
        allUsers[socket.id] = socket;
        findPeer(socket);
    })

    socket.on('send message', data => {
        const room = rooms[socket.id];
        socket.broadcast.to(room).emit('message', data);
    })

    socket.on('leave room', () => {
        const room = rooms[socket.id];
        socket.broadcast.to(room).emit('end', []);
        socket.leave(room);
        let peerID = room.split('#');
        peerID = peerID[0] === socket.id ? peerID[1] : peerID[0];
        const peer = allUsers[peerID];
        peer.leave(room);
        findPeer(allUsers[peerID]);
    })
})

http.listen(3000, () => {
    console.log('listening on: 3000');
});