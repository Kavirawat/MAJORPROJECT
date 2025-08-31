const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://i.pinimg.com/736x/e9/78/57/e97857e3252343fc5bd3ec82dca02d3c.jpg",
    set: (v) =>
      v === ""
        ? "https://i.pinimg.com/736x/e9/78/57/e97857e3252343fc5bd3ec82dca02d3c.jpg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
