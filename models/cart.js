const { Schema, model, Model } = require('mongoose');

const cartSchema = new Schema(
  {
      title:String,
      image1:String,
      image2:String,
      image3:String,
      description:String,
      category:String,
      price:Number,
      rating:Number,
  },
  { timestamps: true }
);

const Cart = model('cart', cartSchema);

module.exports = Cart;

