const express = require("express");
const module1 = express.Router();
const mongodb = require("mongodb");
module1.get("/",(req,res)=>{
    const connection = req.db;
    const db = connection.db(process.env.DATABASE_NAME);
    db.collection(process.env.COLLECTION_NAME).find().toArray((err,array)=>{
        if(err) throw err;
        else{
            res.send(array);
        }
    });
});
module.exports = module1;