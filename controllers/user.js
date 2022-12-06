const User = require('../models/user')



const updateUser =async(req,res,next)=>{
    try {
        const newUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
        
    }
}

const deleteUser = async(req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.")
    } catch (error) {
        next(error)
        
    }
}

const getSingleUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
        
    }
}

const getAllUsers = async(req,res,next)=>{
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}



// count number of users
const countUser = async(req,res,next)=>{
    try {
        const users = await User.countDocuments({})
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}



module.exports = {updateUser,deleteUser,getSingleUser, getAllUsers,countUser}
