let num = 153;
let com = num;
let count = 0;
let amrestrong = 0;
let temp = num;
while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}
while (temp > 0) {
    let x = 1;
    let ld = temp % 10;

    for (let i = 1; i <= count; i++) {
        x = x * ld;
    }
    amrestrong = amrestrong + x;
    temp = Math.floor(temp / 10);
}
if (amrestrong == com)  {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}
