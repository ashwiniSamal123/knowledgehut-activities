// let fun = require('./Ex1Default');
// console.log(fun);


let user = require("./activity3");
let read = require("readline-sync");
let ask = "";
let List = [];
do{
    user.name1 = read.question("Enter your name: ");
    user.age = read.questionInt("Enter your age: ");
    user.gender = read.question("Enter your gender: ");
    let person = new user(user.name1,user.age,user.gender);
    List.push(person.display());
    ask  = read.question("Do you want to continue (yes / quit): ");
}while(ask!=="quit")
console.log(List);