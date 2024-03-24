const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('Witaj Świecie !')
});

module.exports = router;