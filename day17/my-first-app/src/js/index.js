// Write your code here...
var x=  document.getElementById("main");
console.log(x);
console.log(x.innerHTML);
x.innerHTML='<h3>hello world....!</h3>';

x.style.color="red";
x.style.fontSize="30px";
x.style.backgroundColor="grey";


var a=prompt("enter value of a : ");
var b=prompt("enter value of b :  ");
a=parseInt(a);
b=parseInt(b);
var c= a+b;
var add= document.getElementById("sum");
add.innerHTML= 'Addition of a and b is '+c;
var d=document.getElementById('cmpr');

if(a>b)
d.innerHTML='a with value ' +a+' is greater than b ' +b;
else
d.innerHTML='a with value ' +a+' is less than b ' +b;