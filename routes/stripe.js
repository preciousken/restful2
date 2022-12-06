const {stripeController} = require('../controllers/stripe');
const express = require('express');
const router = express.Router();

router.post('/',stripeController)

module.exports = router