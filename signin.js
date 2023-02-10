const mongoose = require('mongoose')
const signupSchema = new mongoose.Schema(
    {
     
        phone: {
            type: String,
            requires: [true, "please input a valid phone number!"],
            trim: true
        },
        password: {
          type:String,
            requires: [true, "Invalid password!"],
            trim: true
        }
     

    }, {
        timestamps: true,
        minimize: true
}
);

module.exports = mongoose.models.Signup || mongoose.model('Signup', signupSchema)