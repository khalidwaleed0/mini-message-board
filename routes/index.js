const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mini-messages-board-db");
const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});

const messages = mongoose.model("messages", messageSchema);

router.get("/", async function (req, res) {
  res.render("index", { title: "Mini Message Board", messages: await messages.find({}) });
});

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", async function (req, res) {
  try {
    await messages.create({
      user: req.body.user,
      text: req.body.message,
      added: new Date(),
    });
    res.redirect("/");
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
