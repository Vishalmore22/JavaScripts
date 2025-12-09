// Create a function that counts how many users have status "active" from an object array.
function countActiveUsers(users) {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].status === "active") {
            count++;
        }
    }
    return count;
}

const users = [
    { name: "Aarav", status: "active" },
    { name: "Vishal", status: "inactive" },
    { name: "Riya", status: "active" },
    { name: "Neha", status: "pending" },
    { name: "Raj", status: "active" }
];

console.log(countActiveUsers(users));

