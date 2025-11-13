const start = 1;
const end = 2025;
let year = start;
do {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year);
    }
    year++;
} while (n >= i) 