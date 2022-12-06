const { Schema, model, Model } = require('mongoose');

const orderSchema = new Schema(
  {
        title:{
          type:String,
          // require:true,
        },
        image1:{
          type:String,
          // require:true,
        },
        image2:{
          type:String,
          // require:true,
        },
        image3:{
          type:String,
          // required:true,
        },
        description:{
          type:String,
          // required:true,
        },
        category:{
          type:String,
          // required:true,
        },
        price:{
          type:Number,
          // required:true,
        },
        quantity:{
          type:Number,
          // required:true,
        },
    totalAmount: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
    //   default: false,
      default:true,
    },
  },
  { timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = Order;
