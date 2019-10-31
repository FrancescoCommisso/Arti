const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log("Express server is running on localhost:3001");
});

app.get("/test", (req, res) => {
  res.send({ message: "This is a message from the server!" });
});

app.get("/menuitems", (req, res) => {
  res.send(require("./menu"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), err => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send(err);
    }
  });
});
