const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.urlencoded({extended:false}));

app.set("view-engine","ejs");



app.get("/",(req,res)=>{
    res.render("index.ejs",{"name":"AshokIT"});
});


app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

let users = [];
app.post("/register",async (req,res)=>{
    try{
        const hashedPassport = await bcrypt.hash(req.body.password,10);
        console.log(hashedPassport);
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedPassport
        });
        res.redirect("/login");
    }catch{
        res.redirect("/register");
    }
    console.log(users);
});



app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
