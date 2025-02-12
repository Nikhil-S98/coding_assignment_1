const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925,
        genre: "Fiction"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        genre: "Fiction"
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublished: 1949,
        genre: "Dystopian Fiction"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813,
        genre: "Classic Romance"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        yearPublished: 1951,
        genre: "Literary Fiction"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        yearPublished: 1954,
        genre: "Fantasy"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        yearPublished: 1979,
        genre: "Science Fiction Comedy"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        yearPublished: 1932,
        genre: "Dystopian Fiction"
    }
];

let input = process.argv[2];

function processYear(year) {

    //checks that user gave a year
    if (isNaN(year) || year < 0) {
        console.log("You need to type in a year.")
    }
    //adds book from books to selectedBooks based on year given
    else {
        let selectedBooks = []
        books.forEach(book => {
            if (book.yearPublished > year) {
               selectedBooks.push(book) 
            }
        }

        
    )    
        //formats and prints each book in selectedBooks
        console.log("Books published after " + year + ":")
        selectedBooks.forEach(book => {
            console.log(book.title + ", " + book.yearPublished)
        })
    }    
}

processYear(input);
