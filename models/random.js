const { Schema, model, Model } = require('mongoose');

const randomSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    items: [
      {
        name: String,
        price: Number,
        shipping: Number,
        quantity: Number,
        product: {
          type: Schema.Types.ObjectId,
          ref: 'product',
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      default: 0,
    },
    config: Object,
    reference: String,
    transaction: Object,
    isPaid: {
      type: Boolean,
      default: false,
    },
    delivery: String,
  },
  { timestamps: true }
);

const Random = model('random', orderSchema);

module.exports = Random;