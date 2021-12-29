const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Harryisagoodb$oy";

//Route:1 for creating user.login do not required
router.post(
  "/createUser",
  [
    body("email", "incoorect email format").isEmail(),
    body("password", "Enter password atleast 8 character").isLength({ min: 8 }),
    body("name", "Enter name atleast 3 character").isLength({ min: 3 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //To check whether these email user alreadt present or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "User with these email already exist" });
      }

      let salt = bcrypt.genSaltSync(10);
      let secretPass = bcrypt.hashSync(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secretPass,
      });
      const data = {
        id: user.id,
      };
      //attach jwt token to data
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.log(error);
      res.send(500).send("Some error occured");
    }
  }
);

//Route:2 for login and authentication of user .login do not required
router.post(
  "/login",
  [
    body("email", "incorrect email format").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { email, password } = req.body;
    try {
      //To check whether these email user alreadt present or not
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "Use Correct credentials" });
      }

      //compare password with existing one
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.log(error);
      res.send(500).send("Internal server error");
    }
  }
);

//Route:3 To verify user with token (get logged in user details).login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(500).send("Internal server error");
  }
});

module.exports = router;
