// 7, 10, 8, 11, 9, 12, ...

let x = 7;
let i = 1;

do {
    console.log(x);
    if (i % 2 != 0) {
        x += 3;
    } else {
        x -= 2;
    }
    i++;
} while (i <= 10)