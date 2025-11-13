// 14, 28, 20, 40, 32, 64, ...

let x = 14;

for (let i = 1; i <= 8; i++) {
    console.log(x);
    if (i % 2 != 0) {
        x *= 2;
    }
    else {
        x -= 8;
    }
}