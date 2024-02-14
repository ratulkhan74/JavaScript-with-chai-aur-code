const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books in forEach loop
// if (Array.isArray(books)) {
//     books.forEach((book) => {
//         if (book.genre === 'History' && book.publish >= 1900) {
//             console.log(book.title);
//             console.log(book.genre);
//             console.log(book.publish);
//         }
//     })
// }

// let filteredBooks = books.filter((book) => {
//     return book.genre === "Fiction"
// })

// let filteredBooks = books
//     .filter((book) => book.genre === "Fiction" || book.edition > 1990)
//     .map((book) => {
//         console.log(book.title);
//         console.log(book.edition);
//     })
// console.log(filteredBooks);
// filteredBooks.forEach((book) => {
//     console.log(book.title);
//     console.log(book.genre);
//     console.log(book.publish);
// })


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Reduce
// const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
const totalPrice = shoppingCart.reduce(function (acc, item) {
    return acc + item.price
}, 0)
console.log(`Total price: ${totalPrice}`);