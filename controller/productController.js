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

    //filtering 
    const queryObj = {...req.query};
    const excludeFields = ["page","sort","limit","fields"];
    excludeFields.forEach((el)=> delete queryObj[el]);
    console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr= queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=> `$${match}`);
    
    let query = Product.find(JSON.parse(queryStr));

    //Sorting 

    if(req.query.sort){

      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);

    }else{
      query = query.sort("-createdAt");
    }

    //limiting fields
    if(req.query.fields){

      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);

    }else{
      query = query.select("-__v");
    }

    //pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page-1)*limit;
    query = query.skip(skip).limit(limit);
    console.log(page,limit,skip);

    if(req.query.page){
      const number = await Product.countDocuments();
      if(skip>=number) throw new Error("This page does not exists")
    }

    const products = await query;
    res.json({
      size:products.length,
      products
    })
  } catch (error) {
    throw new Error(error);
  }
})