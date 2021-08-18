const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const home = require("./home");
app.use("/home",home);

const login = require("./login");
app.use("/login",login);

let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`);
});


//http://localhost:8080/home/home

//http://localhost:8080/login/login






