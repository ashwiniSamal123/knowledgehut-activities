let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = 9099;

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/main.html');
});

io.on("connection", (socket)=>{
    socket.on('username',(user)=>{
       socket.emit('un',user);
    });
    socket.on('message',(obj)=>{
        io.sockets.emit('publish',obj);
    });
});
http.listen(port,()=>console.log(`server running at ${port}`));