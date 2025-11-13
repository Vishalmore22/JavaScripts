// 3,4,7,8,11,12....

let x = 3;

for (let i = 1; i <= 9; i++) {
    console.log(x);
    if (i % 2 != 0) {
        x += 1;
    } else {
        x += 3;
    }
}