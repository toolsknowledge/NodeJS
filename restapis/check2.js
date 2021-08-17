const middleware2 = (req,res,next)=>{
    let allHeaders = req.headers;
    if(allHeaders.token2 === "Backend"){
        next();
    }else{
        res.status(400).send({"msg":"authentication failed"});
    }
};
module.exports = middleware2;