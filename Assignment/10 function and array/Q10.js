// Write a function that takes an array and returns the index of a given element.
function findElementIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; // Return -1 if the element is not found
}

let arr = [10, 20, 30, 40, 50];
console.log(findElementIndex(arr, 30)); // Output: 2