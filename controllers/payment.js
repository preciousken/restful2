const stripe = require('stripe')('sk_test_51M9pf5KFCCEImBuGXPz8wFVcBY4miTdPJDOjNNcIjP4FfqcNnj96NFdaUhlRriokf0vdu4nhKKJjD6YrW4npaQLU005RpP9tFX');
require('dotenv').config();

const makePayment = async (req,res,next)=>{


try{
    const { product } = req.body; 
    const session = await stripe.checkout.sessions.create({ 
        
        payment_method_types: ["card"], 
        line_items: [ 
          { 
            price_data: { 
              currency: "inr", 
              product_data: { 
                name: product.name, 
              }, 
              unit_amount: product.price * 100, 
            }, 
            quantity: product.quantity, 
          }, 
        ], 
        mode: "payment", 
        success_url: `${SITE_URL}/success`, 
        cancel_url: `${SITE_URL}/cancel`, 
      }); 
      res.json({ id: session.id }); 
}catch(error){

}
}

module.exports = {makePayment}