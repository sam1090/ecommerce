const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

exports.createProduct = asyncHandler(async(req,res)=>{
  try {
    if(req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);

    res.json({
      newProduct
    })
  } catch (error) {
    throw new Error(error);
  }
})

exports.updateProduct = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  try {
    if(req.body.title){
      req.body.slug = slugify(req.body.title);
    }
    const updatedProduct = await Product.findOneAndUpdate({_id:id},req.body,{
      new:true
    });
    console.log(updatedProduct);
    res.json({
      updatedProduct
    })
  } catch (error) {
throw new Error(error);
  }
})

exports.deleteProduct = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  console.log(id);
  try {
    if(req.body.title){
      req.body.slug = slugify(req.body.title);
    }
    const deleteProduct = await Product.findOneAndDelete({_id:id})
    res.sendStatus(204);

  } catch (error) {
throw new Error(error);
  }
})

exports.getaProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params

    try {
      const product = await Product.findById(id);
      res.json({product});
    } catch (error) {
      throw new Error(error);
    }
})

exports.getAllProducts= asyncHandler(async(req,res)=>{
  try {
    const products = await Product.find();
    res.json({
      size:products.length,
      products
    })
  } catch (error) {
    throw new Error(error);
  }
})