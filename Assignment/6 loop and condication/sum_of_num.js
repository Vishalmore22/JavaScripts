// find sum of all digits of a number
let num = 555;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
console.log("Sum of all digits is: " + sum);