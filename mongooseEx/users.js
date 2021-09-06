const express = require("express");
const data = require("./data");
const Users = require("./model");
const module1 = express.Router();
module1.get("/users",(req,res)=>{
    Users.remove({});
    const result = Users.insertMany(data.users);
    res.send({result});
});
module.exports = module1;