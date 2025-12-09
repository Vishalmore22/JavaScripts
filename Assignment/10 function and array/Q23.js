// Create a function that finds the student object with the highest marks from an array.
function highestMark(students) {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topper.marks) {
            topper = students[i];
        }
    }
    return topper;
}
const students = [
    { name: "Aarav", marks: 85 },
    { name: "Vansh", marks: 92 },
    { name: "Rahul", marks: 78 }
];

console.log(highestMark(students));
