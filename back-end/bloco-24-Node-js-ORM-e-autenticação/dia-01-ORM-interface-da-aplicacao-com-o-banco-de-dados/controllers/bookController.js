const { Book } = require('../models');

const getAll = async (_req, res) => {
    try {
        const books = await Book.findAll();
        return res.status(200).json(books);
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'algo deu errador'});
    }
}

module.exports = { getAll }