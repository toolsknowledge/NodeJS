const express = require("express");

const home = express.Router();

home.get("/",(req,res)=>{
    res.send({"msg":"welcome to home module"});
});

home.get("/home",(req,res)=>{
    res.send({"msg":"test message"});
});



module.exports = home;