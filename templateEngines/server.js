const express = require("express");
const bodyparser = require("body-parser");
const pug = require("pug");
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.set("view engine","pug");
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("form");
});

app.post("/insert",(req,res)=>{
    console.log(req.body.p_id,req.body.p_name,req.body.p_cost);
});

app.listen(8080,()=>{
    console.log("server listening the port no:8080");
});

