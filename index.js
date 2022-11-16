const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
// console.log(publicPath)
// app.use(express.static(publicPath));

// Define route
app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/contact", (_, res) => {
  res.sendFile(`${publicPath}/contact.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/404.html`);
});

app.listen(4500);
