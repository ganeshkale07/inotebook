const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post('/createUser',
    [body('email' , 'incoorect email format').isEmail(),
    body('password','Enter password atleast 8 character').isLength({ min: 8 }),
    body('name', 'Enter name atleast 3 character').isLength({ min: 3 })],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        try{
        //To check whether these email user alreadt present or not
        let user = await User.findOne({email : req.body.email}); 
        if(user){
            return res.status(400).json({ errors: "User with these email already exist" });
        }
    
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        })
        res.json(user)
        
        }catch(error){
            console.log(error)
            res.send(500).send("Some error occured");
        }
      }, )

module.exports = router 