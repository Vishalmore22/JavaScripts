// 3, 4, 7, 8, 11, 12, ...

let x = 3;
let i = 1;

while (i <= 8) {
    console.log(x);
    if (i % 2 != 0) {
        x += 1;
    } else {
        x += 3;
    }
    i++;
}