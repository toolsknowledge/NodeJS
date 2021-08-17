const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

const middleware1 = require("./check1");
app.use(middleware1);


const middleware2 = require("./check2");
app.use(middleware2);


app.post("/login",[middleware1,middleware2],(req,res)=>{
    if(req.body.uname == "admin" && req.body.upwd == "admin"){
        res.send({"login":"success"});
    }else{
        res.send({"login":"fail"});
    }    
});

let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`);
})



