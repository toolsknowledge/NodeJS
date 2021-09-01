const express = require("express");
const module4  = express.Router();

module4.delete("/",(req,res)=>{
            const connection = req.db;
            const db = connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME).deleteOne({"e_id":req.body.e_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"msg":"record delete successfully"});
                }
            })

})
module.exports = module4;