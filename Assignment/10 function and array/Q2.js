// Write a function that takes an array and returns the maximum element.

function maxArray(arr) {//[10,9,23,14,15]
    let max = arr[0];// max = 10
    for (let i = 1; i < arr.length; i++) {//i=1 i=2 i=3 i=4
        if (arr[i] > max) {//false true 23>10 false false false
            max = arr[i];//max = 23
        }
    }
    return max;
}

let arr = [10, 9, 23, 14, 15];
console.log(arr);
console.log("Maximum element in the array:", maxArray(arr)); // Output: 23