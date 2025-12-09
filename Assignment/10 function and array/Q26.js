// Create a function that returns an array of book titles from an array of book objects.
function getBookTitles(books) {
    let titles = [];
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
}

const books = [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { title: "Wings of Fire", author: "A. P. J. Abdul Kalam" }
];

console.log(getBookTitles(books));
