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
      "https://www.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_11306427.htm#fromView=keyword&page=1&position=0&uuid=9214aa93-4857-4cfc-b040-83393dff30d4&query=Sunrise",
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
