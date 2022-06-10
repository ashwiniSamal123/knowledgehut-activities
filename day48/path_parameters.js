let express = require('express');
let main = express();
let port = 9022;

main.listen(port ,()=>console.log(`server started at ${port}`) );
main.post('/store/:id/:name/:salary', (Request, res) => {
    let empId = parseInt(Request.params.id);
    let empName = Request.params.name;
    let empSalary = Request.params.salary;
    let emp = {id : empId, name : empName, salary: empSalary  };
    res.json(emp);
});
 main.get('/fetch/:id', (Request, res) => {
     let id = parseInt(Request.params.id);
     res.json({message: `fetching ${id} details`});
 });
 main.put('/update/:id/:salary', (Request,res) => {
    let id = parseInt(Request.params.id);
    let salary = Request.params.salary;
    let emp = {id : id, salary : salary};
    res.json(emp);

 });
 main.delete('/remove/:id', (Request, res) =>{
     let id = parseInt(Request.params.id);
     res.json({message:` id ${id} is deleted`});
 });