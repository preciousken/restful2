const { Schema, model, Model } = require('mongoose');

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image1:{
      type:String,
      required:true,
    },
    image2:{
      type:String,
      required:true,
    },
    image3:{
      type:String,
      required:true,
    },
    description: {
      type: String,
      required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    colors:{
      type:String,
      required:true,
    },
    numberInStock:{
      type:Number,
      // required:true,
    },

  },
  { timestamps: true }
);


const Product = model('product', productSchema);

module.exports = Product;