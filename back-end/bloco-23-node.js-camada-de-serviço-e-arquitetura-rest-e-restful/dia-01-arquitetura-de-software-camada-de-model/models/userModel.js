const connection = require('../models/connection');

const create = async ({firstName, lastName, email, password}) => {
    const [result] = await connection.execute(
        'INSERT INTO users.users (first_Name, last_Name, email, password) VALUES (?, ?, ?, ?)', 
        [firstName, lastName, email, password]
    );

    return result;
}

module.exports = {
    create,
}