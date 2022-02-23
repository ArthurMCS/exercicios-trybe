const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController')

const app = express();
app.use(bodyParser.json());


app.post('/user', userController.create);

app.listen(3001, () => console.log('app listening on port 3001'));