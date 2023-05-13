const express = require('express');
const db = require('../config/database');
const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM Product', function (error, results, fields) {
        if (error) {
            res.status(500).send({error: 'Something failed!'});
        }
        res.json(results);
    });
});

module.exports = router;
