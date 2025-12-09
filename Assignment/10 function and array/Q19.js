// Write a function that checks whether an array is symmetric (same forward and backward).
function isSymmetric(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(isSymmetric(arr));
