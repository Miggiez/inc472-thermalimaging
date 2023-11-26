const express = require('express');
const router = express.Router();
const image = require('../services/image.js')

router.post('/55', image.image2);







module.exports = router;