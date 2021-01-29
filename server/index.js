const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"]
    }
  });

io.on('connection', socket => {
    console.log('user-> ' + socket.id + ' connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
})

http.listen(3000, () => {
    console.log('listening on: 3000');
});