const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please input your email address!"],
           
        },
        tel: {
            type: String
        },
        text: {
            type: String,
            required: [true, "Please briefly describe your reason for contacting us!"],
          
        },
     

    }, {
        timestamps: true,
        minimize: true
}
);

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema)