// Write a function that takes an array and returns the second largest number.
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num < largest) {
            second = num;
        }
    }
    return second;
}

let arr = [1, 2, 3, 4, 5];
console.log(secondLargest(arr));
