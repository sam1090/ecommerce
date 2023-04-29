const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const crypto = require('crypto');
const Product = require('./productModel')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,        
      },
    email:{
        type:String,
        required:true,
        unique:true,  
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
    },
    cart: {
        type:Array,
        default:[]
    },
    address:[{
       type:String,
    }],
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"}],
    
    isBlocked:{
        type:Boolean,
        default:false,
    },
    refreshToken:{
        type:String,
        
    },
    passwordChangedAt:{
        type:Date,
    },
    passwordResetToken:{
        type:String
    },
    passwordResetExpires:Date,

},
{
    timestamps: true,
}) ;

userSchema.pre('save',  async function(next ){

    if(!this.isModified("password")){
        next();
    }

const salt =await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next();
});

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.createPasswordResetToken = async function (){
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.passwordResetExpires = Date.now() + 30*60*1000; //10 minutes

    return resetToken;
};


//Export the model
module.exports = mongoose.model('User', userSchema);