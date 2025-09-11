const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
// const { ref } = require("joi");

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://tiimg.tistatic.com/fp/1/005/026/nature-wallpaper-112.jpg",
    set: (v) =>
      v === ""
        ? "https://tiimg.tistatic.com/fp/1/005/026/nature-wallpaper-112.jpg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

listingSchema.post("findOndAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
