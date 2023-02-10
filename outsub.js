const mongoose = require('mongoose')
const outtransactionSchema = new mongoose.Schema(
    {
        data: [{
            country: {
                type: String,
            required: true
            },
            phone: {
                type: String,
            required: true
            },
            provider: {
                type: String,
            required: true
            },
            plans:{
                type: String,
            required: true
            },
            bank: {
                type: String,
            required: true
            },
            email: {
                type: String,
            required: true
            },
           createdAt: {
               type: Date,
               immutable: true,
                default: ()=> Date.now()
            },
            updatedAt: {
                type: Date,
                default: new Date(),
                default: ()=> Date.now()
           },
            stage: {
                type: String,
                enum: ['pending','paid', 'completed', 'cancelled'],
                default: 'pending'
            }
        }, {
        timestamps: true,
        minimize: true
}],
        airtime:[ {
            country: {
                type: String,
            required: true
            },
             phone: {
                type: String,
            required: true
            },
             
            provider: {
                type: String,
            required: true
            },
            email: {
                type: String,
            required: true
            },
            amount:{
                type: String,
            required: true
            },
            bank: {
                type: String,
            required: true
            },
           createdAt: {
               type: Date,
               immutable: true,
                default: ()=> Date.now()
            },
            updatedAt: {
                type: Date,
                default: new Date(),
                default: ()=> Date.now()
           },
            stage: {
                type: String,
                enum: ['pending','paid', 'completed', 'cancelled'],
                default: 'pending'
            }
        }, {
        timestamps: true,
        minimize: true
}],
        electricity:[{
            country: {
                type: String,
            required: true
            },
            phone: {
                type: String,
            required: true
            },
            provider: {
                type: String,
            required: true
            },
            card: {
                type: String,
            required: true
            },
            email:{
                type: String,
            required: true
            },
            amount:{
                type: String,
            required: true
            },
            bank: {
                type: String,
            required: true
            },
           createdAt: {
               type: Date,
               immutable: true,
                default: ()=> Date.now()
            },
            updatedAt: {
                type: Date,
                default: new Date(),
                default: ()=> Date.now()
           },
            stage: {
                type: String,
                enum: ['pending','paid', 'completed', 'cancelled'],
                default: 'pending'
            },
            result: String,
        }, {
        timestamps: true,
        minimize: true
},{
        timestamps: true,
        minimize: true
}],
        tv:[ {
            country: {
                type: String,
            required: true
            },
             phone: {
                type: String,
            required: true
            },
            provider: {
                type: String,
            required: true
            },
            plans: {
                type: String,
            required: true
            },
            card: {
                type: String,
            required: true
            },
            email: {
                type: String,
            required: true
            },
            bank: {
                type: String,
            required: true
            },
           createdAt: {
               type: Date,
               immutable: true,
                default: ()=> Date.now()
            },
            updatedAt: {
                type: Date,
                default: ()=> Date.now()
           },
            stage: {
                type: String,
                enum: ['pending','paid', 'completed', 'cancelled'],
                default: 'pending'
            },
        },{
        timestamps: true,
        minimize: true
}],
      
     }, {
        timestamps: true,
        minimize: true
}
);


module.exports = mongoose.models.Outtrans || mongoose.model('Outtrans', outtransactionSchema)