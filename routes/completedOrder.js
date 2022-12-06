const express = require('express');
const { createCompletedOrder, updateCompletedOrder, deleteCompletedOrder, getSingleCompletedOrder, getAllCompletedOrders, getCompletedOrderQuery, getLatestCompletedOrder , CompletedOrderSearch} = require('../controllers/completedOrder');
const CompletedOrder = require('../models/completedOrder');
const { createError } = require('../utilities/error');
const router = express.Router();
const {verifyAdmin} = require('../utilities/verifyToken')

// create
router.post('/',verifyAdmin,createCompletedOrder)
// update
router.put('/update/:id',verifyAdmin,updateCompletedOrder)
// delete
router.delete('/delete/:id',verifyAdmin,deleteCompletedOrder)
// get
router.get('/single/:id',getSingleCompletedOrder)
// get all
router.get('/all',getAllCompletedOrders)


// get completedOrder by query
router.get('/completedOrderCategory',getCompletedOrderQuery)
// get latest completedOrder
router.get('/latestCompletedOrder',getLatestCompletedOrder)
// search any completedOrder
router.get('/completedOrderSearch',CompletedOrderSearch)




module.exports = router;