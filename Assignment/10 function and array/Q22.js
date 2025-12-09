//Create a function that takes an array of product objects and returns total price.
function getTotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

const products = [
    { name: "Phone", price: 15000 },
    { name: "Headphones", price: 2000 },
    { name: "Charger", price: 800 }
];

console.log(getTotalPrice(products));

