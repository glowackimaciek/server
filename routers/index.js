const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Witaj Świecie !')
});

module.exports = router;