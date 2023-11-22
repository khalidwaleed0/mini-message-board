const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

router.get("/", function (req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", function (req, res) {
  messages.push({ user: req.body.user, text: req.body.message, added: new Date().toLocaleString() });
  res.redirect("/");
});

module.exports = router;
