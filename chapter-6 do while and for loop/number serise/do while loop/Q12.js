// 14, 28, 20, 40, 32, 64, ...

let x = 14;
let i = 1;

do {
    console.log(x);
    if (i % 2 != 0) {
        x *= 2;
    } else {
        x -= 8;
    }
    i++;
} while (i <= 8) 