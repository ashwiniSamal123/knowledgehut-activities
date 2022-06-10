let express= require('express');
let parser = require("body-parser");
let main = express();
let port = 9089;

main.use(parser.json());
main.listen(port, ()=> console.log(`server running at ${port}`));
let emps = [];
main.post('/employee',(req,res) =>{
    let body = req.body;
    emps.push(body);
    res.json({content: `id: ${body.id}, name: ${body.name} , salary: ${body.salary}`});
});
main.get('/employee', (req,res)=>{
    res.json(emps);
});
main.get('/employee/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let found = false;
    for(let index = 0; index < emps.length; index++) {
        if(id === emps[index].id){
            found = true;
            res.json(emps[index]);

        }
    }
    if(found == false){
        res.json({message:`Employee with an id ${id} is not found`});
    }
});
