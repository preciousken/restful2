const { Schema, model, Model } = require('mongoose');

const reviewSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);


const Review = model('review', reviewSchema);

module.exports = Review;
