const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser')
const path = require('path')
const {connect} = require('mongoose');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const productRouter = require('./routes/product')
const uploadRouter = require('./routes/upload')
const reviewRouter = require('./routes/review')
const CompletedOrderRouter = require('./routes/completedOrder')
const paymentRouter = require('./routes/payment');
const emailRouter = require('./routes/sendEmail')
const stripeRouter = require('./routes/stripe')
const cookieParser = require('cookie-parser')
const cors = require('cors')


require('dotenv').config()
const app = express();

const connectDB = async () =>{
  try {
    await connect(process.env.DATABASE_URL);
    console.log('connected to the database')
  } catch (error) {
    throw error;
  }
}


// ////
app.get("/",(req,res)=>{
  res.send('Welcome to main route')
})
// ////


// middlewares
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/product',productRouter)
app.use('/api/upload',uploadRouter)
app.use('/api/review',reviewRouter)
app.use('/api/completedOrder',CompletedOrderRouter)
app.use('/api/payment',paymentRouter)
app.use('/api/email',emailRouter)
//        /api/stripe
app.use('/api/stripe',stripeRouter)





// ERROR MESSAGE CONTROLLER
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 5000
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  })
})




const port = process.env.PORT || 5000;
app.listen(port,()=>{
  connectDB()
  console.log(`
Connection established successfully 
App listening on port ${port}`)
})