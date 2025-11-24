// wap to check number is palindrom or not

let num = 121;
let tem = num;
let rev = 0;
while (num > 0) {
    let ld = num % 10;//3,2
    rev = (rev * 10) + ld;
    num = Math.floor(num / 10);//12,1   
}
if (tem == rev) {
    console.log(tem + " is a palindrom number");
} else {
    console.log(tem + " is not palindrom number");
}


