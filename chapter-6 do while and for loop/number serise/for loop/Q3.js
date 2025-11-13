// 36,34,30,28,24.....

let x = 36;

for (let i = 1; i <= 10; i++) {
    console.log(x);
    if (i % 2 != 0) {
        x -= 2;
    }
    else {
        x -= 4;
    }
}
