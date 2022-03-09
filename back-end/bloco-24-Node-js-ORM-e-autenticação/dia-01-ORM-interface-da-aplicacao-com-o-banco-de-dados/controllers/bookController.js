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

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findByPk(id);
      return res.status(200).json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).json({message: 'algo deu errado'});
    }
  };

module.exports = { getAll, getById }