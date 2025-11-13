// 31, 29, 24, 22, 17, ... 

let x = 31;

for (let i = 1; i <= 8; i++) {
    console.log(x);
    if (i % 2 != 0) {
        x-=2;
    }
    else{
        x-=5;
    }
}