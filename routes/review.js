const express = require('express');
const { createReview,updateReview,deleteReview, getSingleReview,getAllReviewsGeneral,deleteSingleReviewGeneral,countReview } = require('../controllers/review');
const router = express.Router();
const {verifyUser} = require('../utilities/verifyToken')

// create
router.post('/addReview/:userId',verifyUser,createReview),
// delete
router.delete('/deleteReview/:id/:userId',verifyUser,deleteReview)
// get
router.get('/reviewSingle/:id',verifyUser,getSingleReview)
// get all reviews
router.get('/all',getAllReviewsGeneral)
router.delete('/delgenSigReview/:id',deleteSingleReviewGeneral)

// countStatus
router.get('/countStatus',countReview)

module.exports = router;