const express = require("express");
const app = express();
const Log = require("./models/logs");
const connectDB = require("./config/db");
const engine = require("express-react-views").createEngine();
app.set("views", "./views");
app.set("view engine", "jsx");
app.engine("jsx", engine);
connectDB();
app.listen("3000", (req, res) => {
  console.log("Server listening on port 3000");
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("New");
});
app.post("/logs", (req, res) => {
  req.body.shipIsBroken
    ? (req.body.shipIsBroken = true)
    : (req.body.shipIsBroken = false);
  Log.create(req.body)
    .then((log) => res.json({ msg: "Log added successfully" }))
    .catch((err) => console.log(err));
});
app.get("/Index", (req, res) => {
  res.send("index");
});
