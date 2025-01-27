let v= 10;
let y = 20; 
let z= v+y;
console.log(`z= ${z}`);


console.log('1');
setTimeout(()=>{console.log('2')},5000);
console.log('3');

//Default export 

let pi = require('./file1');
console.log(pi);

// named export
let x= require('./file2');
let a1 = x.a;
let b1 = x.b;
let c1 = x.c;
let t  = x.test;
t();
console.log(`A=${a1}, B = ${b1} , C = ${c1}`);


// Default Export: importing calculator
let cal = require('./calci');
let r = cal.add(2,3);
console.log(`Addition = ${r}`);
 r = cal.sub(2,3);
 console.log(`Subtraction = ${r}`);
 r= cal.multiply(4,5);
 console.log(`Multiplication = ${r}`);
 r = cal.div(20,5);
 console.log(`Divison = ${r}`);

// importing dbOperations

let db = require('./dbFun').dbOperation;
db.store();
db.fetch();


// class importing
 
let ar = require('./class');
console.log(ar);

// named class import

let rectangle = require('./rectarea'); 
let area = new rectangle(10,20).areaOfRect;
console.log(`area of rectangle is ${area}`);

let circle1 = require('./namedClass').circle;
let areaCir = new circle1(10).areaOfCircle;
console.log(`area of circle is ${areaCir}`);

let square = require('./namedClass').square;
let square1 = new square(2);
console.log(`area of square is ${square1.areaOfSquare}`);
