const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Witaj na stronie panelu zarządzania !');
});

module.exports = router;