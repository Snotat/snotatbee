const mongoose=require('mongoose')

const earnSchema = new mongoose.Schema(
    {
        affiliate: {
            clicks: {
                type: Number,
                default: 0
            },
            converts:{type: Number,
                default: 0
            },
        },
        agent: {
            type: Boolean,
            default: false
        },
        referral: {
            clicks: {
                type: Number,
                default: 0
            },
            converts:{type: Number,
                default: 0
            },
        }
     }
)
const transactionSchema = new mongoose.Schema(
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
            email: {
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
            stage: {
                type: String,
                enum: ['pending','paid', 'completed', 'cancelled'],
                default: 'pending'
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
            email: {
                type: String,
            required: true
            },
            provider: {
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
                default: new Date(),
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


const signupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true,

        },
        email: {
          type:String,
            required: true,
            trim: true,
            unique:true,
            lowercase: true
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            unique:true
        },
        admin: {
            type: Boolean,
            required: true,
            default: false
        },
        pin: {
            type: String,
            required: true,
            trim: true
        },
        earn: earnSchema,
        transactions: transactionSchema,
        password: {
          type:String,
            required: true,
            trim: true
        },
        cpassword: {
            type: String,
            required: true,
            trim: true
        },
     

    }, {
        timestamps: true,
        minimize: true
}
);
signupSchema.pre('save', function(next) {
    this.updatedAt=Date.now()
    next()
})

module.exports = mongoose.models.Signup || mongoose.model('Signup', signupSchema)