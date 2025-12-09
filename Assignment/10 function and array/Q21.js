// Create a function that takes an array of student objects and returns only the names.
function getStudentNames(students) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        result.push(students[i].age);
    }
    return result;
}

const students = [
    { name: "Aarav", age: 18 },
    { name: "Vishal", age: 20 },
    { name: "Rahul", age: 19 }
];

console.log(getStudentNames(students));

