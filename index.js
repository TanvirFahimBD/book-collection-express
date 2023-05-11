const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.end("Book Collection");
});

app.listen(8000, () => {
    console.log("Server running at port 8000");
})