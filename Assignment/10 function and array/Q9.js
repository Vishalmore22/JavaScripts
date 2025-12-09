// Write a function that takes an array and checks if a given element exists or not.
function elementExists(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }   
    return false;
}

let arr = [10, 20, 30, 40, 50];
console.log(elementExists(arr, 30)); // Output: true
console.log(elementExists(arr, 60)); // Output: false