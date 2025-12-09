// Write a function that takes an array and returns a new array in reversed order.
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

arr = reverseArray([1, 2, 3, 4, 5]);
console.log(arr.length);

console.log(arr); // Output: [5, 4, 3, 2, 1]