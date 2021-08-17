//middleware
const middleware1 = (req,res,next)=>{
    let allHeaders = req.headers;
    if( allHeaders.token1 === "NodeJS" ){
        next();
    }else{
        res.status(401).send({"msg":"unautorized user"});
    }
};
module.exports = middleware1;