const { generateToken } = require('../config/jwToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const {validateMoongooseId} = require('../utils/validateMongodbId')
const {generateRefreshToken} = require('../config/refreshToken');

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

// to get all users 
exports.getallUsers = asyncHandler(async(req,res)=>{
  try{
    const getUsers = await User.find();
    res.status(200).json({
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
  try {
    const {id} = req.user;
    validateMoongooseId(id);

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