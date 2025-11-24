// find sum of first and last digit of a number

let num = 1234;
let first = 0;
let last = num % 10; //4
while (num >= 10) {
    num = Math.floor(num / 10); //123,12,1
}
first = num; //1
let sum = first + last;
console.log("Sum of first and last digit is: " + sum);