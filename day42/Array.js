let items = [1 , 2, 3, 4, 5,6 , 7];
items.forEach(value => console.log(value));
console.log('--------------------------');
let item2 = items.map((value, index)=> value * 10);
console.log(item2);