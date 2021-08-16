//import express module
const express = require("express");

//import dotenv
const dotenv = require("dotenv");


//create the rest object
const app = express();


//configure env file
dotenv.config();


/*
    //http://localhost:8080/login?uname=admin&upwd=admin
    //create the rest api
    app.get("/login",(req,res)=>{
        if(req.query.uname === "admin" && req.query.upwd === "admin"){
            res.send({"login":"success"});
        }else{
            res.send({"login":"fail"});
        }
    });
*/


/*
    //http://localhost:8080/login/admin/admin
    app.get("/login/:uname/:upwd",(req,res)=>{
        if(req.params.uname === "admin" && req.params.upwd === "admin"){
            res.send({"login":"success"});
        }else{
            res.send({"login":"fail"});
        }
    });
*/



//read the post parameters
const bodyparser = require("body-parser");
app.use( bodyparser.json() );

//check -1
//check -2
//check -3


app.post("/login",(req,res)=>{
    if(req.body.uname === "admin" && req.body.upwd === "admin"){
        res.send({"login":"success"});
    }else{
        res.send({"login":"fail"});
    }
});












//assign the port number
let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`);
});
