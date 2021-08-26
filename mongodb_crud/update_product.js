const express = require("express");
const module3 = express.Router();
const mongodb = require("mongodb");
const ashokIT = mongodb.MongoClient;
module3.put("/",(req,res)=>{
    ashokIT.connect(process.env.CONNECTION_URL,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME)
              .updateOne({"e_id":req.body.e_id},{$set:{"e_name":req.body.e_name,
                                                        "e_sal":req.body.e_sal}},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({"msg":"record updated successfully"});
                    }
            });
        }
    })
});
module.exports = module3;