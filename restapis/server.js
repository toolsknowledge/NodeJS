//import express module
const express = require("express");
//rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest services
//Ex. GET, POST,PUT,DELETE,......

//create the get request
app.get("/",(req,res)=>{
    res.send({"msg":"welcome to default get request !!!"});
});
app.get("/products",(req,res)=>{
    res.send({"msg":"welcome to products request !!!"});
});


app.post("/",(req,res)=>{
    res.send({"msg":"default post request !!!"});
})

app.post("/login",(req,res)=>{
    res.send({"msg":"welcome to login request !!!"});
});


app.put("/",(req,res)=>{
    res.status(200).send({"msg":"welcome to put request !!!"});
});


app.put("/update",(req,res)=>{
    res.status(400).send({"msg":"resource not available"});
});


app.delete("/del",(req,res)=>{
    res.status(500).send({"msg":"internal server error"});
});






app.listen(8080,()=>{
    console.log("server listening the port no 8080");
});
