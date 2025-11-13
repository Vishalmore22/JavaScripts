// 2, 1, (1/2), (1/4), ... 

let x = 2;
let i = 1;
console.log("2");
console.log("1");
do {
    console.log("1/" + x);
    x *= 2;
    i++;
} while (i <= 5)
