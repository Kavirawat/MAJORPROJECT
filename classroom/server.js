const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretecode"));

app.get("/getsignedcookie", (req, res) => {
  res.cookie("Made-In", "India", { signed: true });
  res.send("signed cookies send!");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  res.send("cookies send verified!");
});

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "Namaste");
  res.cookie("MadeIn", "India");
  res.send("send some cookies!");
});

app.get("/greet", (req, res) => {
  let { name } = req.cookies;
  res.send(`Hi, ${name}`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("This is root route");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
