// 8, 6, 9, 23, 87 , ...

let x = 8;
let y = 2;
let i = 1;

while (i <= 5) {
    console.log(x);
    x *= i;
    x -= y;
    y++;
    i++;
}