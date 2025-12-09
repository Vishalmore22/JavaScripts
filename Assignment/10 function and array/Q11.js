// Write a function that takes an array and returns a new array without duplicate values.
function removeDuplicates(arr) {
    let uniqueArr = []; // Initialize an empty array to store unique values
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {//explain includes() method - Determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
            uniqueArr.push(arr[i]); // Add the element if it's not already in uniqueArr
        }
    }
    return uniqueArr; // Return the array with duplicates removed
}
let arr = [10, 20, 20, 30, 40, 40, 50];
console.log(removeDuplicates(arr)); // Output: [10, 20, 30, 40, 50]
