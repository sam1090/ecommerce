const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');
const {validateMoongooseId} = require('../utils/validateMongodbId')

exports.createBrand = asyncHandler(async(req,res)=>{
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
  
});

exports.getBrand = asyncHandler(async(req,res)=>{
  const {id} =req.params;
  validateMoongooseId(id);
  try {
    const getABrand = await Brand.findById(id);
    res.json(getABrand);
    
  } catch (error) {
    throw new Error(error);
  }

});

exports.getAllBrand = asyncHandler(async(req,res)=>{

  try {
    const getAllBrand = await Brand.find();
    res.json({
      size:getAllBrand.length,
      getAllBrand
    }
      );
    
  } catch (error) {
    throw new Error(error);
  }

});


exports.updateBrand = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  validateMoongooseId(id);
  try {
  const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
    new:true
  });
  res.json(updatedBrand);
    
  } catch (error) {
    throw new Error(error)
  }

});

exports.deleteBrand = asyncHandler(async(req,res)=>{
  const {id}= req.params;
  validateMoongooseId(id);
  try {
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.json(deleteBrand)
  } catch (error) {
    throw new Error(error);
  }
 
});
