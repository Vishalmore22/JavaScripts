// 31, 29, 24, 22, 17, ...

let x = 31;
let i = 1;

while (i <= 8) {
    console.log(x);
    if (i % 2 != 0) {
        x -= 2;
    } else {
        x -= 5;
    }
    i++;
}