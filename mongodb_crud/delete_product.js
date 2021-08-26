const express = require("express");
const module4  = express.Router();
const mongodb = require("mongodb");
const ashokIT = mongodb.MongoClient;
module4.delete("/",(req,res)=>{
    ashokIT.connect(process.env.CONNECTION_URL,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME).deleteOne({"e_id":req.body.e_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"msg":"record delete successfully"});
                }
            })
        }
    })
})
module.exports = module4;