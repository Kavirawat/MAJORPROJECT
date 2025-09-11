const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is root route");
});

//Index - Users
app.get("/users", (req, res) => {
  res.send("Get for users");
});

//show - Users
app.get("/users/:id", (req, res) => {
  res.send("Get for show users");
});

//show - Users
app.post("/users", (req, res) => {
  res.send("post for  for show users");
});


app.listen(3000, () => {
  console.log("Server is running on 3000");
});
