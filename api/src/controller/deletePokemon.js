const { Router } = require('express');
const { Pokemon, Type } = require('../db');

const app = Router();


// const app = Router();
// app.get('/', async (req, res) => {

// })

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await Pokemon.destroy({
        where: {
            id: id
        }
    });

    res.send(`Delete record with id ${id}`);

});

module.exports = app