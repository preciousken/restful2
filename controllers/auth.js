const User = require("../models/user")
const bcrypt = require("bcrypt");
const { createError } = require("../utilities/error");
const jwt = require('jsonwebtoken')
require("dotenv").config()


const register = async (req,res,next)=>{

try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:hash,
        address:req.body.address
    })

    await newUser.save()
    res.status(200).send("User has been created.")
} catch (error) {
    next(error);
}
}

const login = async (req,res,next)=>{

    try {
        const user = await User.findOne({email:req.body.email});
        if(!user)return next(createError(404,"User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(404,"Wrong passwordor username!"))

        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET)

        const{password, ...otherDetails} = user._doc;

        res.cookie("access_token", token,{
            httpOnly:true,
        }).status(200).send({...otherDetails});

    } catch (error) {
        next(error);
    }
    }

module.exports = {register,login}