// Write a function that takes an array and counts how many positive numbers are present.
function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
arr = countPositiveNumbers([-10, 15, -20, 25, 30, -5]);
console.log(arr); // Output: 3