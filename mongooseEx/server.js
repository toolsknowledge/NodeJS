const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const data = require("./data");
const User = require("./userModel");
const app = express();
app.use(express.json());
app.use(cors());

//connect to mongodb database
mongoose.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mern?retryWrites=true&w=majority`,{
   useNewUrlParser: true, 
   useUnifiedTopology: true
});


app.get("/insert_records",(req,res)=>{
    User.remove({});
    const result = User.insertMany(data.users);
    res.send(result);
});


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
})


