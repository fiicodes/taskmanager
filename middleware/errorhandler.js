const errorHandlerMiddleware =(err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({msg:'somethimg went wrong please try again later'})
}


module.exports=errorHandlerMiddleware