const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use( cookieParser() );


app.get("/setthecookies",(req,res)=>{
    res.cookie("sub_one","reactjs");
    res.cookie("sub_two","NodeJS");
    res.cookie("sub_three","mongodb");
    res.send({"msg":"cookies are set"});
});


app.get("/getthecookies",(req,res)=>{
    res.send(req.cookies);
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});

