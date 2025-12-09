//Write a function that counts how many times each element appears in an array
function elementCounter(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) { 
            map[arr[i]] = 1;
        }
        else {
            map[arr[i]] += 1;
        }
    }
    return map;
}

let arr = [1,2,2,3,4,1,5,3];
console.log(elementCounter(arr));
