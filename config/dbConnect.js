const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const url = process.env.MONGO_URL;
const dbConnect = () =>{
  try{
  mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
  console.log('database is connected');
  }catch(error){
    console.log(error);
  }
}


module.exports = dbConnect; 