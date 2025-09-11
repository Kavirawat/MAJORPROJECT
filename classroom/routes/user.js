const express = require("express");
const router = express.Router();

//Index - Users
router.get("/", (req, res) => {
  res.send("Get for users");
});

//show - Users
router.get("/:id", (req, res) => {
  res.send("Get for  users id");
});

//Post - Users
router.post("/", (req, res) => {
  res.send("post for  for show users");
});

//Delete - Users
router.delete("/:id", (req, res) => {
  res.send(" Delete for  for users id");
});

module.exports = router;
