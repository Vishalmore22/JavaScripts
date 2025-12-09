// Write a function that takes an array and returns the average of all numbers.

function averageArray(arr) {
    if (arr.length === 0) return 0; // Handle empty array case
    let sum = 0;
    arr.forEach((arr) => {
        sum += arr;
    });
    return sum / arr.length;
}

arr = averageArray([10, 20, 30, 40, 50]);
console.log(arr); // Output: 30
