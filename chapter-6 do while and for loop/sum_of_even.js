// find sum of only even number

let num = 5;
sum = 0;

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        sum += i;
    }   
}
console.log(sum);
