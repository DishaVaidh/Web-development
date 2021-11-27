//Node server which will handle socket io connections

const { Socket } = require('socket.io');

const io =require('socket.io')(8000);
const users = {};

io.on("connection",socket=>{
    socket.on('New-user-joined',name=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);//this message send to everyone except user that joined 
    });

    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,name:users[socket.id]})//Everyone recieve msg except that send 
    });

    // If someone leaves the chat, let others know 
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})