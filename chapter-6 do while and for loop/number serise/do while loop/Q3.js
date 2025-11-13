//  36, 34, 30, 28, 24, ...

let x = 36;
let i = 1;

do {
    console.log(x);
    if (i % 2 != 0) {
        x -= 2;
    } else {
        x -= 4;
    }
    i++;
} while (i <= 5) 