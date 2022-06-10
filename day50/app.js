let app = require('express')();
let http  = require('http').Server(app);
let io = require("socket.io")(http);
let port =9021;

app.get('/',(request, response)=>{
    response.sendFile(__dirname+'/index.html');
});
io.on('connection',(socket)=>{
    console.log('socket io started');
    socket.on('obj',(msg) =>{
        console.log(msg);
    });
    socket.emit("obj2", "hello! this is server");
})
http.listen(port, ()=> console.log(`server running ${port}`));