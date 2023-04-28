const Product = require('../models/productModel');
const User = require('../models/userModel');
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
});

exports.addToWishlist = asyncHandler(async(req,res)=>{
  const {_id} = req.user;
  const { prodId } = req.body;
  console.log(req.user);

 try {
   const user =await User.findById(_id);
  //  console.log(user.wishlist);
   const alreadyadded = user.wishlist.find((id)=>id.toString() === prodId);
  //  console.log(alreadyadded);
   if(alreadyadded){
     let user = await User.findByIdAndUpdate(
       _id,
       {
         $pull: {wishlist: prodId}
       },{
         new:true
       }
     );
     res.json(user);
   }else{
     let user = await User.findByIdAndUpdate(
       _id,
       {
         $push: {wishlist: prodId}
       },{
         new:true
       }
     );
     res.json(user);
   }
 } catch (error) {
   throw new Error(error);
 } 
}); 

exports.rating = asyncHandler(async(req,res)=>{
  // console.log(req.user);
  const { _id } = req.user;
  const {star, prodId , comment} = req.body;
 
  try {
    console.log("hello");
    console.log(_id,star,prodId);
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find((userId)=> userId.postedby.toString()===(_id).toString());

    if(alreadyRated){
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated},
        },
        {
          $set: { "ratings.$.star":star,
          "ratings.$.comment":comment,
        },
        },
        {
          new:true,
        },
      );
      res.json(updateRating);
    }
    else{
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push : {
            ratings:{
              star:star,
              comment:comment,
              postedby: (_id),
            }
          }
        },
        {
          new:true,
        }
      );
      res.json(rateProduct);
    }
  } catch (error) {
    throw new Error(error);
  }
})