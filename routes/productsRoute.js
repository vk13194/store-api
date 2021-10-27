const express = require('express');
const router = express.Router()
const { getallProducts } = require('../controllers/productsControllers.js')

router.route('/').get(getallProducts)

module.exports = router;