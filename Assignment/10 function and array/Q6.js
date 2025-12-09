// Write a function that takes an array and returns only even numbers in a new array.
function getEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
arr = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(arr); // Output: [2, 4, 6, 8, 10]