const Order = require('../models/order');
const User = require('../models/user');
const {createError} = require('../utilities/error');

// create order working
const createOrder = async(req,res,next)=>{
    const userId = req.params.userId;
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        try {
            await User.findByIdAndUpdate(userId,
                {$push : {order: savedOrder._id},
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedOrder)
    } catch (error) {
        next(error)
    }
}


// remove order working
const deleteOrder = async(req,res,next)=>{
    const userId = req.params.userId;
    // first remove from user order
    try {
        await Order.findByIdAndDelete(req.params.userId);
        try {
            await User.findByIdAndUpdate(userId,
                {$pull : {order: req.params.id},
            });
            // then remove from the general order
            try {
                await Order.findByIdAndDelete(req.params.id)
            } catch (error) {
                next(error)
            }
        } catch (error) {
            next(error);
        }        
        res.status(200).json('Order has been deleted')
    } catch (error) {
        next(error)
        
    }
}

const getSingleOrder = async(req,res,next)=>{
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
}




module.exports = {createOrder,deleteOrder, getSingleOrder}