const express = require("express");
const User = require("../models/User_model");

const router = express.Router();

router.post("/backup", async (req, res) => {
  try {
    console.log(req.body);
    res.json({ message: "backup." });
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/reg", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    console.log("meow");
    console.log(req.body);
    res.json({ message: "Регистрация прошла успешно." });
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
