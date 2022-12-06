const CompletedOrder = require('../models/completedOrder')
const cloudinary = require('cloudinary')


const createCompletedOrder = async (req,res,next)=>{
    // upload images to the cloudinary first then 

    const newCompletedOrder = new CompletedOrder(req.body);
    try {
        const savedCompletedOrder = await newCompletedOrder.save()
        res.status(200).json(savedCompletedOrder)
    } catch (error) {
        next(error)
    }
}


const updateCompletedOrder =async(req,res,next)=>{
    try {
        const newCompletedOrder = await CompletedOrder.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(newCompletedOrder)
    } catch (error) {
        next(error)
        
    }
}

const deleteCompletedOrder = async(req,res,next)=>{
    try {
        const updatedCompletedOrder = await CompletedOrder.findByIdAndDelete(req.params.id)
        res.status(200).json(updatedCompletedOrder)
    } catch (error) {
        next(error)
        
    }
}

const getSingleCompletedOrder = async(req,res,next)=>{
    try {
        const completedOrder = await CompletedOrder.findById(req.params.id)
        res.status(200).json(completedOrder)
    } catch (error) {
        next(error)
        
    }
}

const getAllCompletedOrders = async(req,res,next)=>{
    try {
        const completedOrder = await CompletedOrder.find({})
        res.status(200).json(completedOrder)
    } catch (error) {
        next(error)
    }
}


// get completedOrders by query
const getCompletedOrderQuery = async (req,res,next)=>{
    try {
        const CompletedOrderQuery = await CompletedOrder.find(req.query)
        res.status(200).json(CompletedOrderQuery)
    } catch (error) {
        next(error)
    }
}

// get latest completedOrder
const getLatestCompletedOrder = async (req,res,next)=>{
    try {
        const LatestCompletedOrder = await CompletedOrder.find({}).sort('-createdAt')
        res.status(200).json(LatestCompletedOrder)
    } catch (error) {
        next(error)
    }
}

// search for completedOrder
const CompletedOrderSearch = async (req,res,next)=>{
    let title = req.query
    try {
        const CompletedOrderSearch = await CompletedOrder.find({title:{"$regex":  /^ad$/i}})
        res.status(200).json(CompletedOrderSearch)
    } catch (error) {
        next(error)
    }
}


module.exports = {createCompletedOrder,updateCompletedOrder,deleteCompletedOrder,getSingleCompletedOrder, getAllCompletedOrders , getCompletedOrderQuery,getLatestCompletedOrder,CompletedOrderSearch}
