const express = require("express");
const auth = require("./auth");

const login = express.Router();

login.post("/login",[auth],(req,res)=>{
    if(req.body.uname == "nodejs" && req.body.upwd == "nodejs"){
        res.status(200).send({"login":"success"});
    }else{
        res.status(400).send({"login":"fail"});
    }
});


module.exports = login;