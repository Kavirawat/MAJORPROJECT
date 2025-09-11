const express = require("express");
const router = express.Router();

//posts
//Index
router.get("/", (req, res) => {
  res.send("Get for post");
});

//show
router.get("/:id", (req, res) => {
  res.send("Get for  post id");
});

//Post
router.post("/", (req, res) => {
  res.send("post for  for show post");
});

//Delete
router.delete("/:id", (req, res) => {
  res.send(" Delete for  for post id");
});

module.exports = router;
