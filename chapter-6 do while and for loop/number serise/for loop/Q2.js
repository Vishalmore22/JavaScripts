// 7,10,8,11,9,12,10,13.......

let x = 7;

for (let i = 1; i <= 10; i++) {
    console.log(x);
    if (i % 2 != 0) {
        x += 3;
    }
    else {
        x -= 2;
    }
}   