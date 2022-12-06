const {makePayment} = require('../controllers/payment');
const express = require('express');
const router = express.Router();

router.post('/',makePayment)

module.exports = router