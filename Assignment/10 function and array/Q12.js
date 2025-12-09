// Write a function that merges two arrays and returns a single array.
function mergeArrays(arr1, arr2) {
    let mergedArr = []; // Initialize an empty array to store merged values
    for (let i = 0; i < arr1.length; i++) {
        mergedArr.push(arr1[i]); // Add elements from the first array
    }       
    for (let j = 0; j < arr2.length; j++) {
        mergedArr.push(arr2[j]); // Add elements from the second array
    }
    return mergedArr; // Return the merged array
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
