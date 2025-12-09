// Write a function that sorts an array in ascending order without using .sort().
function sortArrayAscending(arr) {
    // Implementing Bubble Sort algorithm
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {//0,1,2
        for (let j = 0; j < n - i - 1; j++) {//0,1,2,3  0,1,2,3  0,1,2
            if (arr[j] > arr[j + 1]) {   
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];//temp=34,34  12,66  34,
                arr[j] = arr[j + 1];//arr[j]=12,5  5,23  23
                arr[j + 1] = temp;//arr[j+1]=34, 12,66  34
            }
        }
    }
    return arr; // Return the sorted array
}
let arr = [34, 12, 5, 66, 23];
console.log(sortArrayAscending(arr)); // Output: [5, 12, 23, 34, 66]