// Write a function that takes an array and returns the minimum element.
function minArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr = [9, 2, 8, 4, 6];
console.log(arr);
console.log("Minmun element in the array :",minArray(arr));

