// 1 11 111 1111
let j = 1;
while (j <= 1111) {
    console.log(j);
    j *= 10;
    j += 1;
}
console.log(" ");
//0 1 1 2 3 5 8 13.....
let first = 0;
let second = 1;
let i = 1;
console.log(first);
console.log(second);
while (i <= 6) {
    let third = first + second;
    first = second;
    second = third;
    console.log(third);
    i++;
}

