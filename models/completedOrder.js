const { Schema, model, Model } = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const completedOrderSchema = new Schema(
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
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
    
  },
  { timestamps: true }
);


const CompletedOrder = model('completedorder', completedOrderSchema);

module.exports = CompletedOrder;
