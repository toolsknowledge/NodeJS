const mongoose = require("mongoose");

const schemaObj = new mongoose.Schema({
    "name":{type:String,required:true,
    "password":{type:String,required:true,
    "isManager":{type:Boolean,required:true}}
    }
},{
    timestamps:true
});

const Users = mongoose.model("Users",schemaObj);

module.exports = Users;