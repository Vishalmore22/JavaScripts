// 1 11 111 1111 .........

for (let i = 1; i <= 1111; i = i * 10 + 1) {
    console.log(i);
}

console.log(" ");
//0 1 1 2 3 5 8 13.....
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 1; i <= 6; i++) {
    let third = first + second;
    first = second;
    second = third;
    console.log(third);
}
