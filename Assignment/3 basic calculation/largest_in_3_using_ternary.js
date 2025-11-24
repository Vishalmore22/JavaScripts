// Find the largest of three numbers using ternary operators.
let a = 36;
let b = 23;
let c = 49;

let largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

console.log(largest + " is a largest");
