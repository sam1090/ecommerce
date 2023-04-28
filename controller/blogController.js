const Blog = require('../models/blogModel');
const User  = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const {validateMoongooseId} = require('../utils/validateMongodbId')

exports.createBlog = asyncHandler( async(req,res)=>{
   try{
    const newBlog = await Blog.create(req.body);
    console.log(newBlog);
     res.json(newBlog);
   }catch(err){
    throw new Error(err);
   }
});

exports.getBlog = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMoongooseId(id);
   try {
      let getBlog = await Blog.findByIdAndUpdate(
       id,
       {
         $inc: { numViews: 1 },
       },
       {
         new: true // return the updated document after the update
       }
     );
     getBlog = await Blog.findById(id).populate("likes").populate("dislikes");
     res.json(getBlog);
   } catch (error) {
     throw new Error(error);
   }
 });

exports.getAllBlogs = asyncHandler(async(req,res)=>{
   try {
      const getAllBlogs = await Blog.find();
     res.json({
      size:getAllBlogs.length,
      getAllBlogs
   }
      );
   } catch (error) {
      throw new Error(error);
   }
})

exports.updateBlog = asyncHandler(async(req,res)=>{
   const {id}= req.params;
   validateMoongooseId(id);
   try{
      const updateBlog = await Blog.findByIdAndUpdate(id,req.body,{new:true});
      res.json(updateBlog);

   }catch(error){
      throw new Error(error);
   }
});

exports.deleteBlog = asyncHandler(async(req,res)=>{
   const {id}= req.params;
   validateMoongooseId(id);
   try{
      const deleteBlog = await Blog.findByIdAndDelete(id);
      res.json(deleteBlog);

   }catch(error){
      throw new Error(error);
   }
});

exports.likeBlog = asyncHandler(async(req,res)=>{
   const {blogId} = req.body;
   validateMoongooseId(blogId);
   
   //Find the blog which you want to be liked 
   const blog = await Blog.findById(blogId);
   
   //find the login user 
   const loginUserId = req?.user?._id;

   //find if the user has liked the blog 
   const isLiked = blog?.isLiked;

   //find if the user has disliked the blog 
   const alreadyDisliked = blog?.dislikes?.find(((userId) => userId?.toString()=== loginUserId?.toString())
   );
   if(alreadyDisliked){
      const blog = await Blog.findByIdAndUpdate(blogId, {
         $pull:{dislikes: loginUserId},
         isDisliked:false
      },{
         new:true
      });
      res.json(blog);
   }
   

   if(isLiked){
      const blog  = await Blog.findByIdAndUpdate(blogId,{
         $pull:{likes:loginUserId},
         isLiked:false
      },{
         new: true
      });

      res.json(blog);
   }
   else{
      const blog = await Blog.findByIdAndUpdate(blogId,{
         $push :{likes: loginUserId},
         isLiked: true
      },{
         new:true
      } );
      res.json(blog);
   }
})

exports.disLikeBlog = asyncHandler(async(req,res)=>{
   const {blogId} = req.body;
   validateMoongooseId(blogId);
   
   //Find the blog which you want to be liked 
   const blog = await Blog.findById(blogId);
   
   //find the login user 
   const loginUserId = req?.user?._id;

   //find if the user has liked the blog 
   const isDisliked = blog?.isDisliked;

   //find if the user has disliked the blog 
   const alreadyLiked = blog?.likes?.find(((userId) => userId?.toString()=== loginUserId?.toString())
   );
   if(alreadyLiked){
      const blog = await Blog.findByIdAndUpdate(blogId, {
         $pull:{dislikes: loginUserId},
         isLiked:false
      },{
         new:true
      });
      res.json(blog);
   }
   

   if(isDisliked){
      const blog  = await Blog.findByIdAndUpdate(blogId,{
         $pull:{dislikes:loginUserId},
         isDisliked:false
      },{
         new: true
      });

      res.json(blog);
   }
   else{
      const blog = await Blog.findByIdAndUpdate(blogId,{
         $push :{dislikes: loginUserId},
         isDisliked: true
      },{
         new:true
      } );
      res.json(blog);
   }
})


