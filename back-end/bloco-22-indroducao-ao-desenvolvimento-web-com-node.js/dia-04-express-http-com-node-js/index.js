const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((err, _req, res, _next) => {
    res.status(500).json({message: err.message})
});

app.listen(3000, () => console.log('listening on port 3000'));