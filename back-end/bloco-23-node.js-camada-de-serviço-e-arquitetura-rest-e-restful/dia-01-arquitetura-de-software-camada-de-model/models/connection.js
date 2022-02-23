const mysqli = require('mysql2/promise');

const connection = mysqli.createPool({
    host: 'localhost',
    user: 'arthurMoreira',
    password: '',
    database: 'users'
});

module.exports = connection;