const Review = require('../models/review');
const User = require('../models/user');
const {createError} = require('../utilities/error');

// create Review working
const createReview = async(req,res,next)=>{
    const userId = req.params.userId;
    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save()
        try {
            await User.findByIdAndUpdate(userId,
                {$push : {review: savedReview._id},
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedReview)
    } catch (error) {
        next(error)
    }
}


// remove review working
const deleteReview = async(req,res,next)=>{
    const userId = req.params.userId;
    try {
        await Review.findByIdAndDelete(req.params.userId);
        try {
            await User.findByIdAndUpdate(userId,
                {$pull : {review: req.params.id},
            });
        } catch (error) {
            next(error);
        }
        
        res.status(200).json('review has been deleted')
    } catch (error) {
        next(error)
        
    }
}

const getSingleReview = async(req,res,next)=>{
    try {
        const review = await Review.findById(req.params.id)
        res.status(200).json(review)
    } catch (error) {
        next(error)
    }
}


// get all reviews id
const getAllReviewsGeneral = async(req,res,next)=>{
    try {
        const allReviews = await Review.find({})
        res.status(200).json(allReviews)
    } catch (error) {
        next(error)
    }
}

// delete single review General
const deleteSingleReviewGeneral = async(req,res,next)=>{
    try {
        await Review.findByIdAndDelete(req.params.id)
    } catch (error) {
        next(error)
    }
}





// count review by status
const countReview = async(req,res,next)=>{
    const status = req.query.status
    try {
     const statusCount =   await Review.countDocuments({status: status})
        res.status(200).json(statusCount)
    } catch (error) {
        next(error)
    }
}



module.exports = {createReview,deleteReview, getSingleReview , countReview, getAllReviewsGeneral, deleteSingleReviewGeneral}