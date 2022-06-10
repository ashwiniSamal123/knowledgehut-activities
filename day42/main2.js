let user = require('./activity2');
let read = require('readline-sync');
let name = read.question('Enter your name: ');
let age = read.questionInt('Enter your age: ');
let gender = read.question('Enter your gender: ');
let user1 = new user(name, age, gender);
user1.display();