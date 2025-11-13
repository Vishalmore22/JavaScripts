// 8, 6, 9, 23, 87 , ...

let x = 8;
let y = 2;
for (let i = 1; i <= 5; i++) {
    console.log(x);
    x *= i;
    x -= y;
    y++;

}