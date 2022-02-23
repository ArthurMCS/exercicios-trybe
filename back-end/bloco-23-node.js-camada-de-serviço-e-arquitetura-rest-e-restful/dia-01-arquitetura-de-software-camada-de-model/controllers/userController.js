const rescue = require('express-rescue');
const userModel = require('../models/userModel');

const create = rescue(async (req, res) => {
    const { firstName, lastName, email, password} = req.body
    const result = await userModel.create(
        {firstName, lastName, email, password}
    );
    return res.status(201).json(
        {id: result.insertId, firstName, lastName, email, password}
    );

});

module.exports = {
    create,
};
