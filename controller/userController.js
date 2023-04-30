const { generateToken } = require('../config/jwToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const {validateMoongooseId} = require('../utils/validateMongodbId')
const {generateRefreshToken} = require('../config/refreshToken');
const jwt = require('jsonwebtoken');
const Product = require('../models/productModel');
const Cart= require('../models/cartModel');
const Coupon= require('../models/couponModel');
const {sendEmail} = require('./emailController');
const crypto = require('crypto');



exports.createUser = asyncHandler(async(req,res)=>{
  const email = req.body.email;
  
  const findUser = await User.findOne({email:email})
  
  if(!findUser){
    const newUser = await User.create(req.body);
    res.status(201).json(newUser)
  }else {
   throw new Error('User Already Exists'); 
  }
})

exports.loginUserCtrl = asyncHandler(async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  //check if user exists or not 
  const findUser = await User.findOne({email});
  if(findUser && await findUser.isPasswordMatched(password)){
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await User.findByIdAndUpdate(findUser.id,{
      refreshToken,
    },{
      new:true
    })

    res.cookie("refreshToken",refreshToken,{
      httpOnly:true,
      maxAge:72 * 60  *60 * 1000,
    })


    res.status(200).json({
      id:findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id)
    });
  }else{
    throw new Error("Invalid credentials")
  }

})

//Login an Admin

exports.loginAdmin = asyncHandler(async(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  //check if user exists or not 
  const findAdmin = await User.findOne({email});
  if(findAdmin.role !=='admin') throw new Error("Not Authorized");
  if(findAdmin && await findAdmin.isPasswordMatched(password)){
    const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateUser = await User.findByIdAndUpdate(findAdmin.id,{
      refreshToken,
    },{
      new:true
    })

    res.cookie("refreshToken",refreshToken,{
      httpOnly:true,
      maxAge:72 * 60  *60 * 1000,
    })


    res.status(200).json({
      id:findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id)
    });
  }else{
    throw new Error("Invalid credentials")
  }

});


//Handle refresh token 
exports.handleRefreshToken = asyncHandler(async (req,res)=>{
  const cookie = req.cookies;
  if(!cookie?.refreshToken) throw new Error("No Refresh Token in Cookie");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({refreshToken});
  if(!user) throw new Error(" NO Refresh Token present in db or not matched")
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded)=>{
    if(err || user.id !== decoded.id){
      throw new Error('there is something wrong with refresh token')
    }
    const accessToken =generateToken(user?._id);
    res.json({
      accessToken
    })
  })
})

// to get all users 
exports.getallUsers = asyncHandler(async(req,res)=>{
  try{
    const getUsers = await User.find();
    res.status(200).json({
      size:getUsers.length,
      getUsers
    })
  }catch(error){
    throw new Error(error);
  }
})

//get a Single User
exports.getaUser = asyncHandler(async(req,res)=>{
  try{
    const {id}= req.params;
    validateMoongooseId(id);
    const getaUser = await User.findById(id);
    res.status(200).json({
      getaUser,
    })
  }catch(error){
    throw new Error(error);
  }
})

//Delete a User
exports.deleteaUser = asyncHandler(async(req,res)=>{
  try{
    const {id}= req.params;
    validateMoongooseId(id);

    const deleteaUser = await User.findByIdAndDelete(id);
    res.status(204).json()
  }catch(error){
    throw new Error(error);
  }
})

// Update a user
exports.updateaUser = asyncHandler(async(req,res)=>{
  const {id} = req.user;
  validateMoongooseId(id);
  
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{
      firstname:req?.body?.firstname,
      lastname:req?.body?.lastname,
      email:req?.body?.email,
      mobile:req?.body?.mobile,
    },{
      new:true
    });

    res.status(200).json({
      updatedUser
    })

  } catch (error) {
    throw new Error(error)
  }
}  )

exports.blockUser =asyncHandler(async(req,res)=>{
 try{
  const {id}= req.params;
  validateMoongooseId(id);

  const blockUser = await User.findByIdAndUpdate(id,{
    isBlocked:true
  },
  {
    new:true
  });
  res.status(200).json({
    message: "User Blocked"
  });
}catch(error){
  throw new Error(error);
}
}
)

exports.unblockUser=asyncHandler(async(req,res)=>{
  try{
   const {id}= req.params;
   validateMoongooseId(id);

   const blockUser = await User.findByIdAndUpdate(id,{
     isBlocked:false
   },
   {
     new:true
   });
   res.status(200).json({
    message: "User unblocked"
  });
 }catch(error){
   throw new Error(error);
 }
 }
 );

 exports.logout = asyncHandler(async(req,res)=>{
  const cookie = req.cookies;
  if(!cookie?.refreshToken)throw new Error("No Refresh Token in Cookie");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({refreshToken});
  if(!user){
    res.clearCookie("refreshToken",{
      httpOnly:true,
      secure:true,
    });
    return res.sendStatus(204);
  }
  await User.findOneAndUpdate(refreshToken,{
    refreshToken:"",
  });
  res.clearCookie("refreshToken",{
    httpOnly:true,
    secure:true
  })
  return res.sendStatus(204);
 })

 //updating password

 exports.updatePassword = asyncHandler(async (req,res)=>{
  const {_id} = req.user;
  const {password} = req.body;
  validateMoongooseId(_id);
  const user = await User.findById(_id);
  if(password){
    user.password = password;
    const updatedPassword = await user.save();
    res.json({updatedPassword});
  }else{
    res.json(user);
  }
 })

 exports.forgotPassword = asyncHandler(async (req, res) => {
  // 1) Get user based on POSTed email
  console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    throw new Error("User not found with this email!")
  }

  // 2) Generate the random reset token
  const resetToken = await user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/forgot-password/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    throw new Error(err)
  }
});

exports.resetPassword = asyncHandler(async(req,res)=>{
  const {password} = req.body;
  const {token} = req.params;


  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken:hashedToken,
    passwordResetExpires: { $gt: Date.now()},
  });

  if(!user) throw new Error("Token Expired, Please try again later!");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  res.json({user})
});

 
exports.getWishlist = asyncHandler(async(req,res)=>{
  const {_id} = req.user;
  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

exports.saveAddress = asyncHandler(async(req,res)=>{
  const {id} = req.user;
  validateMoongooseId(id);
  
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{
      address:req?.body?.address,
    },{
      new:true
    });

    res.status(200).json({
      updatedUser
    })

  } catch (error) {
    throw new Error(error)
  } 
});

exports.userCart = asyncHandler(async(req,res)=>{
  const {cart} = req.body ;
  const { _id} = req.user;
  validateMoongooseId(_id);

  try {
    let products = [];
    const user = await User.findById(_id);
    //check if user already have products in cart
    const alreadyExistCart = await Cart.findOne({orderby:user._id});

    if(alreadyExistCart){
      alreadyExistCart.remove();
    }
    for (let i = 0; i< cart.length; i++){
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
      } 
      let cartTotal = 0;
      for (let i = 0; i<products.length ; i++){
        cartTotal = cartTotal + products[i].price * products[i].count; 
      }
      // console.log(products, cartTotal);
      let newCart = await new Cart({
        products,
        cartTotal,
        orderby: user?._id,
      }).save();
      res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

exports.getUserCart = asyncHandler(async(req,res)=>{
  const {_id} = req.user;
  validateMoongooseId(_id);

  try {
    const cart = await Cart.findOne({ orderby: _id}).populate("products.product");
    res.json(cart);
  } catch (error) {
    throw new Error(error)
  }
});

exports.emptyCart = asyncHandler(async(req,res)=>{
  const {_id}  = req.user;
  validateMoongooseId(_id);

  try {
    const user = await User.findOne({_id});
    const cart = await Cart.findOneAndRemove({orderby: user._id});
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

exports.applyCoupon = asyncHandler(async(req,res)=>{
  const {coupon } = req.body ;
  const { _id} = req.user;

  validateMoongooseId(_id);

  const validCoupon = await Coupon.findOne({ name: coupon});
  if (validCoupon === null){
    throw new Error ("Invalid Coupon"); 
  }
  const user = await User.findOne({_id});
  let { products , cartTotal} = await Cart.findOne(
    {orderby:user._id})
    .populate("products.product");
  let totalAfterDiscount = (
    cartTotal-(cartTotal *validCoupon.discount)/100).toFixed(2);

    await Cart.findOneAndUpdate(
      {orderby: user._id},
      {totalAfterDiscount},
      {new : true}
    );
  
  res.json(totalAfterDiscount);
});