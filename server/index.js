const express = require('express');
const app = express();
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

const getDate = () => {
    const d = new Date()
    const stringDate = `${d.getHours() < 10 ? '0'+d.getHours() : d.getHours() }:${d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()}`;
    return stringDate;
}

const findPeer = (socket, status) => {
    if(queue.length > 0 && queue[0].id !== socket.id) {
        const peer = queue.pop();
        const room = socket.id + '#' + peer.id;

        socket.join(room);
        peer.join(room);
        rooms[peer.id] = room;
        rooms[socket.id] = room;

        peer.emit('start', { nickname: names[socket.id], avatar: Math.ceil(Math.random() * 4)});
        socket.emit('start', { nickname: names[peer.id], avatar: Math.ceil(Math.random() * 4)});
    } else {
        queue.push(socket);
        socket.emit('queue', { status, message: 'Você está na fila de espera. Logo, logo você será conectado com alguém' });
    }
}

const disconnecting = (socket, rooms) => {
    const room = rooms[socket.id];
    if(room) {
        socket.broadcast.to(room).emit('end', []);
        socket.leave(room);
        let peerID = room.split('#');
        peerID = peerID[0] === socket.id ? peerID[1] : peerID[0];
        const peer = allUsers[peerID];
        peer.leave(room);
        queue = [];
        delete rooms[socket.id];
        delete rooms[peerID];
        findPeer(allUsers[peerID], "O usuário se desconectou. Aguarde!");
    }
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

    socket.on('status', data => {
        const room = rooms[socket.id];
        if(room) {
            let peerID = room.split('#');
            peerID = peerID[0] === socket.id ? peerID[1] : peerID[0];
            const peer = allUsers[peerID];
            peer.emit('status client', data);
        }
    })

    socket.on('writing', data => {
        const room = rooms[socket.id];
        if(room) {
            let peerID = room.split('#');
            peerID = peerID[0] === socket.id ? peerID[1] : peerID[0];
            const peer = allUsers[peerID];
            peer.emit('writing client', data);
        }
    })
})

http.listen(3000, () => {
    console.log('listening on: 3000');
});