let store = require('./userDatails').store;
let fetch = require('./userDatails').fetch;
let fetchById = require('./userDatails').fetchById;
let update = require('./userDatails').update;

let express = require('express');
let main = express();
let parser = require('body-parser');
const { append } = require('vary');
let port = 2222;

main.use(parser.json());
main.listen(port,()=>console.log(`server running at port ${port} `));

main.post('/store',(req,res)=>{
    let body = req.body;
    let data = store(body.firstName,body.lastName,body.password);
    res.json(data);
});
main.get('/fetch',(req,res)=>{
    let data  = fetch();
    data.length===0?res.json({msg:'No data to display...'}):res.json(data);
});

main.get('/fetch/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let data= fetchById(id);
    typeof(data)==='object'?res.json(data):res.json({mg:`id ${id} not found..`});


});

main.put('/update/:id/:password/:newpassword',(req,res)=>{
    let id = parseInt(req.params.id);
    let password = req.params.password;
    let newpassword = req.params.newpassword;
    let data  = update(id,password,newpassword);
    if(data===0){
        res.json({msg:'password is incorrect'});

    }else if(data ===1){
        res.json({msg:`id ${id} is not found`});
    }else if(typeof(data)==='object'){
        res.json(data);
    }
});
