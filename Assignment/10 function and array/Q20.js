// Write a function that converts a 2D array (matrix) into a 1D array.
function oneArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}

let arr = [[1, 2, 3], [4, 5, 6]];
console.log(oneArray(arr));
