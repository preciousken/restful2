const Cart = require('../models/cart');
const User = require('../models/user');
const Product = require('../models/product')
const {createError} = require('../utilities/error');

// create Cart working
const createCart = async(req,res,next)=>{
    const userId = req.params.userId;
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        try {
            await User.findByIdAndUpdate(userId,
                {$push : {cart: savedCart._id},
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedCart)
    } catch (error) {
        next(error)
    }
}


// remove cart working
const deleteCart = async(req,res,next)=>{
    const userId = req.params.userId;
    // first remove from user cart
    try {
        await Cart.findByIdAndDelete(req.params.userId);
        try {
            await User.findByIdAndUpdate(userId,
                {$pull : {cart: req.params.id},
            });
            // then remove from the general cart
            try {
                await Cart.findByIdAndDelete(req.params.id)
            } catch (error) {
                next(error)
            }
        } catch (error) {
            next(error);
        }        
        res.status(200).json('Cart has been deleted')
    } catch (error) {
        next(error)
        
    }
}

const getSingleCart = async(req,res,next)=>{
    try {
        const cart = await Cart.findById(req.params.id)
        res.status(200).json(cart)
    } catch (error) {
        next(error)
    }
}


// get all carts id
const getAllCartsGeneral = async(req,res,next)=>{
    try {
        const allCarts = await Cart.find({})
        res.status(200).json(allCarts)
    } catch (error) {
        next(error)
    }
}

// delete single cart General
const deleteSingleCartGeneral = async(req,res,next)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
    } catch (error) {
        next(error)
    }
}





// count cart by status
const countCart = async(req,res,next)=>{
    const status = req.query.status
    try {
     const statusCount =   await Cart.countDocuments({status: status})
        res.status(200).json(statusCount)
    } catch (error) {
        next(error)
    }
}



module.exports = {createCart,deleteCart, getSingleCart , countCart, getAllCartsGeneral, deleteSingleCartGeneral}