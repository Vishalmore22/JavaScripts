// Create a function that converts an array of key-value objects into a single object.
function arrayToObject(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i].key] = arr[i].value;
    }

    return result;
}
const arr = [
    { key: "name", value: "Vishal" },
    { key: "age", value: 22 },
    { key: "city", value: "Surat" }
];
console.log(arrayToObject(arr));
