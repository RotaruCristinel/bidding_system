const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This will return all auctions.');
});

module.exports = router;
