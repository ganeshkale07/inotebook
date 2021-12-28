const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        //date.now() no parenthesis on date input only it will trigger
        default: Date.now
    },
  });

  module.exports = mongoose.model('user', UserSchema); 