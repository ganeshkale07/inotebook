const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post('/',
    [body('email' , 'incoorect email format').isEmail(),
    body('password','Enter password atleast 8 character').isLength({ min: 8 }),
    body('name', 'Enter name atleast 3 character').isLength({ min: 3 })],
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        }).then(user => res.json(user))
        .catch(error => {console.log(error)
        res.json({error : "INVALID INPUT" , message : error.message})});
      }, )

module.exports = router 