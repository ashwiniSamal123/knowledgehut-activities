let read = require('readline-sync');

let username = read.question('Enter your name: ');

let age= read.questionInt('Enter our age: ');

console.log(`Hello ${username} , Your age is ${age}`);