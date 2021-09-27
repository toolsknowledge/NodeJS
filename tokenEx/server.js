const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const app = express();
app.use(express.json());

let token = "";

app.post("/login",(req,res)=>{
    
    if(req.body.email === "ashokit" && req.body.password === "ashokit" ){
        token = jsonwebtoken.sign({"email":req.body.email,"password":req.body.password},"ashokit123",{ expiresIn: '1d' })
        return res.send({"token":token});
    }else{
        res.send({"message":"authentication error"});
    }
});

const compareToken = (req,res,next)=>{
    let allHeaders = req.headers;
    if(allHeaders.token == token){
        next();
    }else{
        res.send({"msg":"unauthorized user"});
    }
};

app.get("/products",[compareToken],(req,res)=>{
    res.send({"products":"products soon....!"});
});


app.get("/admin",[compareToken],(req,res)=>{
    res.send({"admin":"admin related information soon...!"});
});



app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});