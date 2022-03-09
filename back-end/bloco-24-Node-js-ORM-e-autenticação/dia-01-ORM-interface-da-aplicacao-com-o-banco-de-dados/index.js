const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const bookController = require('./controllers/bookController');

app.use(bodyParser.json());

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);

app.listen(() => console.log(`Ouvindo na porta 3000!`));