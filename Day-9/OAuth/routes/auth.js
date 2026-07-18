const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
const router = express.Router();
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  db.query(
    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
    [name, email, hashPassword],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: "User Registered" });
    },
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (result.length == 0) {
        return res.json({ message: "User Not Found" });
      }
      const user = result[0];
      const check = await bcrypt.compare(password, user.password);
      if (!check) {
        return res.json({ message: "Wrong Password" });
      }
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
      );
      res.json({ message: "Login Success", token });
    },
  );
});

const auth = require("../middleware/auth");
router.get("/profile", auth, (req, res) => {
  res.json({ message: "Welcome User", user: req.user });
});

module.exports = router;
