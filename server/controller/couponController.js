const Coupon = require('../models/couponModel');
const asyncHandler = require('express-async-handler');
const {validateMoongooseId} = require('../utils/validateMongodbId')

exports.createCoupon = asyncHandler(async(req,res)=>{
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
  
});

exports.getAllCoupon = asyncHandler(async(req,res)=>{

  try {
    const getAllCoupon = await Coupon.find();
    res.json(getAllCoupon);
    
  } catch (error) {
    throw new Error(error);
  }

});


exports.updateCoupon = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  validateMoongooseId(id);
  try {
  const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
    new:true
  });
  res.json(updatedCoupon);
    
  } catch (error) {
    throw new Error(error)
  }

});

exports.deleteCoupon = asyncHandler(async(req,res)=>{
  const {id}= req.params;
  validateMoongooseId(id);
  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteCoupon)
  } catch (error) {
    throw new Error(error);
  }
 
});