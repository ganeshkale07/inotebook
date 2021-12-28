const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
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

  //same email id use kela tari new user crated 
//   module.exports = mongoose.model('user', UserSchema);

// "createIndexes" email id unique asla pahije mag user create
const User = mongoose.model('user', UserSchema);
module.exports = User; 