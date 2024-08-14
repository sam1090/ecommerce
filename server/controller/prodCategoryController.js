const Category = require('../models/prodCategoryModel');
const asyncHandler = require('express-async-handler');
const {validateMoongooseId} = require('../utils/validateMongodbId')

exports.createCategory = asyncHandler(async(req,res)=>{
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
  
});

exports.getCategory = asyncHandler(async(req,res)=>{
  const {id} =req.params;
  validateMoongooseId(id);
  try {
    const getACategory = await Category.findById(id);
    res.json(getACategory);
    
  } catch (error) {
    throw new Error(error);
  }

});

exports.getAllCategory = asyncHandler(async(req,res)=>{

  try {
    const getAllCategory = await Category.find();
    res.json({
      getAllCategory,
    });
    
  } catch (error) {
    throw new Error(error);
  }

});


exports.updateCategory = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  validateMoongooseId(id);
  try {
  const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
    new:true
  });
  res.json(updatedCategory);
    
  } catch (error) {
    throw new Error(error)
  }

});

exports.deleteCategory = asyncHandler(async(req,res)=>{
  const {id}= req.params;
  validateMoongooseId(id);
  try {
    const deleteCategory = await Category.findByIdAndDelete(id);
    res.json(deleteCategory)
  } catch (error) {
    throw new Error(error);
  }
 
});