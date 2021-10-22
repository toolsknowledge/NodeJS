const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const passport = require("passport");
const passportInitilize = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
app.use(express.urlencoded({extended:false}));

passportInitilize(passport,
email=>{
        return users.find(user=> user.email === email);
},
id=>{
    return users.find(user=> user.id === id);
});


app.set("view-engine","ejs");
app.use(flash());
app.use(session({
    secret:"secrete",
    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());




app.get("/",(req,res)=>{
    res.render("index.ejs",{"name":"AshokIT"});
});


app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.post("/login",passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"/login",
    failureFlash:true
}));



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
