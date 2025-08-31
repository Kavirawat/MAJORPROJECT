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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F538532067923737619%2F&psig=AOvVaw0p-rgz50hVs7k2te5i1vrV&ust=1756633680278000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjzhMqgso8DFQAAAAAdAAAAABAL",
    set: (v) =>
      v === ""
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F538532067923737619%2F&psig=AOvVaw0p-rgz50hVs7k2te5i1vrV&ust=1756633680278000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjzhMqgso8DFQAAAAAdAAAAABAL"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
