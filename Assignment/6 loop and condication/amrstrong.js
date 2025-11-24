let num = 1634;
let com = num;
let count = 0;
let amrestrong = 0;
let temp = num;
while (num > 0) {//1634,163,16,1 
    num = Math.floor(num / 10);//163,16,1,0
    count++;//1,2,3,4
}
while (temp > 0) {//1634,163,16,1
    let x = 1;//1
    let ld = temp % 10;//4,3,6,1

    for (let i = 1; i <= count; i++) {//1,2,3,4
        x = x * ld;//4,16,64,256 || 3,9,27,81 || 6,36,216,1296 || 1,1,1,1
    }
    amrestrong = amrestrong + x;//0+256=256 || 256+81=337 || 337+1296=1633 || 1633+1=1634
    temp = Math.floor(temp / 10);//163,16,1,0
}
if (amrestrong == com)  {//1634==1634
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}
