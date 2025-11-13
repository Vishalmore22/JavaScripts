//  22, 21, 23, 22, 24, 23, ... 

let x = 22;
let i = 1;

do {
    console.log(x);
    if (i % 2 != 0) {
        x -= 1;
    } else {
        x += 2;
    }
    i++;
} while (i <= 6) 