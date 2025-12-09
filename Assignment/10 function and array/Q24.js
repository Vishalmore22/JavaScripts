//Create a function that filters employee objects whose salary is above 30000.
function highestSalary(employees) {
    let result = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > 30000) {
            result.push(employees[i]);
        }
    }
    return result;
}

const employees = [
    { name: "Amit", salary: 28000 },
    { name: "isha", salary: 35000 },
    { name: "Sneha", salary: 42000 },
    { name: "Rohan", salary: 25000 }
];

console.log(highestSalary(employees));

