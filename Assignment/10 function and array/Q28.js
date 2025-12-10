// Create a function that sorts employee objects by salary in descending order.
function sortBySalaryDesc(employees) {
    let n = employees.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (employees[i].salary < employees[j].salary) {
                // swap
                let temp = employees[i];
                employees[i] = employees[j];
                employees[j] = temp;
            }
        }
    }
    return employees;
}
let employees = [
    { name: "Rahul", salary: 30000 },
    { name: "Neha", salary: 50000 },
    { name: "Amit", salary: 40000 }
];

console.log(sortBySalaryDesc(employees));


