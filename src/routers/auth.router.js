const { Router } = require("express");
const router = Router();

router.post("/sign-in", (req, res) => {
  res.json({ message: "login" });
});

router.post("/sign-up", (req, res) => {
  res.json({ message: "register" });
});

module.exports = router;
