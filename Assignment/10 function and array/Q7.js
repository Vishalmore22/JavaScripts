// Write a function that takes an array and returns only odd numbers in a new array.
function getOddNumbers(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

arr = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(arr); // Output: [1, 3, 5, 7, 9]