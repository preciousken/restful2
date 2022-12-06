const stripe = require('stripe')(process.env.STRIPE_SECRET)
const stripeController = async (req,res)=>{
    const {purchase,total_amount,shipping_fee}=req.body;

    const calculateOrderAmount = () =>{
        return total_amount + shipping_fee;
    };

    const paymentIntent = await stripe.paymentIntent.create({
        amount:calculateOrderAmount(),
        currency:'usd',
    });

    res.json({clientSecret: paymentIntent.clien_secret});
}


module.exports = {stripeController};