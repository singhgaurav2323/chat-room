const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('server is up to runtime Need!!');
});

module.exports = router;