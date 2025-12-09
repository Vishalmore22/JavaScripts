// Write a function that takes an array and returns the product of all elements.
function productOfArray(arr) {
    let product = 1; // Initialize product to 1 (multiplicative identity)
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]; // Multiply each element to the product
    }
    return product; // Return the final product
}
let arr = [1, 2, 3, 4];
console.log(productOfArray(arr)); // Output: 24
