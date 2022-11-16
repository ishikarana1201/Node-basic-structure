const { response } = require("express");
const express = require("express");
const reqFilter = require("./middleware");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
// console.log(publicPath)
// app.use(express.static(publicPath));

//Application-level middleware
// app.use(reqFilter);
// app.get("/", (_, res) => {
//   res.send("This is home page");
// });

// // Single route middleware
// app.get("/about", reqFilter, (_, res) => {
//   res.send("This is about page");
// });

// // Specific page middleware
// const route = express.Router();
// route.use(reqFilter);

// route.get("/contact", (req, res) => {
//     res.send("This is contact page");
//   });
//   app.use('/',route);





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
