exports.notFound = (req,res,next)=>{
  const error = new Error(`Not Found : ${req.originalUrl}`);
  res.status(404);
  next(error);

}

exports.errorHandler = (err, req, res, next) =>{
  const statuscode = res.statusCode == 200? 500: res.status(statusCode);
  res.json({
    message: err?.message,
    stack: err?.stack,
  });
};   