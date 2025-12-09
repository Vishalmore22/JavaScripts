// Write a function that takes an array of strings and returns the longest string.
function longestString(arr) {
    let longest = "";

    for (let str of arr) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}

let arr = ["sachin","isha","roshan","vishal","sakashi","raj"];
console.log(longestString(arr));

