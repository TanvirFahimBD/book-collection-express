const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

// app.get('/books', function (req, res) {
//     const books = []
//     if (books.length) {
//         res.send(books);
//         res.end('All books here')
//     } else {
//         res.end("No books found");
//     }
// });

// app.post('/books', function (req, res) {
//     const newbook = {
//         id: Math.random().toString(),
//         title: 'the title of the book',
//         author: 'the author of the book',
//         publishedDate: 'the publication date of the book, in ISO 8601 format(e.g. "2022-05-07")'
//     }
//     books.append(newbook)
//     res.end('books deleted successfully');
// });

// app.delete('/books/:id', function (req, res) {
//     const { id } = req.params;
//     books = books.filter(books => books.id !== id);
//     res.end('books deleted successfully');
// });

app.listen(8000, () => {
    console.log("Server running at port 8000");
})