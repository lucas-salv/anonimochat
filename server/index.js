const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "https://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

app.use('/anonimochat/static/', express.static('public'));

// variables
var queue = [];    // list of sockets waiting for peers
var rooms = {};    // map socket.id => room
var names = {};    // map socket.id => name
var allUsers = {}; // map socket.id => socket
var avatars = [
    '/anonimochat/static/avatar01.png',
    '/anonimochat/static/avatar02.png',
    '/anonimochat/static/avatar03.png',
    '/anonimochat/static/avatar04.png'
]

const getDate = () => {
    const d = new Date()
    const stringDate = `${d.getHours() < 10 ? '0'+d.getHours() : d.getHours() }:${d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()}`;
    return stringDate;
}

const findPeer = (socket, status) => {
    if(queue.length > 0 && queue[0].id !== socket.id) {
        const peer = queue.pop();
        const room = socket.id + '#' + peer.id;

        peer.join(room);
        socket.join(room);
        rooms[peer.id] = room;
        rooms[socket.id] = room;

        const peerAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        const socketAvatar = avatars[Math.floor(Math.random() * avatars.length)]

        peer.emit('start', { nickname: names[socket.id], avatar: peerAvatar });
        socket.emit('start', { nickname: names[peer.id], avatar: socketAvatar });
    } else {
        queue.push(socket);
        socket.emit('queue', { status, message: 'Você está na fila de espera. Logo, logo você será conectado com alguém' });
    }
}

const disconnecting = (socket, rooms) => {
    const room = rooms[socket.id];
    socket.broadcast.to(room).emit('end', []);
    socket.leave(room);
    let peerID = room.split('#');
    peerID = peerID[0] === socket.id ? peerID[1] : peerID[0];
    const peer = allUsers[peerID];
    peer.leave(room);
    findPeer(allUsers[peerID], "O usuário se desconectou. Aguarde!");
}

io.on('connection', socket => {
    console.log('user-> ' + socket.id + ' connected');

    socket.on('login', data => {
        names[socket.id] = data.nickname;
        allUsers[socket.id] = socket;
        findPeer(socket);
    })

    socket.on('send message', data => {
        const room = rooms[socket.id];
        socket.broadcast.to(room).emit('message', {...data, date: getDate()});
    })

    socket.on('leave room', () => {
        disconnecting(socket, rooms);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
        disconnecting(socket, rooms);
    })

    socket.on('disconnect queue', () => {
        queue = [];
        socket.emit('queue', { message: undefined });
    })
})

http.listen(3000, () => {
    console.log('listening on: 3000');
});