const auth = (req,res,next)=>{
    let allHeaders = req.headers;
    if(allHeaders.token == "nodejs"){
        next();
    }else{
        res.send({"msg":"unauthorized user"});
    }
};
module.exports = auth;