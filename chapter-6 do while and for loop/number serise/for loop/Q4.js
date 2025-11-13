//22,21,23,22,24,23......

let x = 22;

for (let i = 1; i <= 10; i++) {
    console.log(x);
    if (i % 2 != 0) {
        x -= 1;
    }
    else {
        x += 2;
    }
}
