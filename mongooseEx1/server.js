const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());

app.set("view engine","pug");
app.set("views","./views");

mongoose.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mern?retryWrites=true&w=majority`);

let productSchema = mongoose.Schema({
    "p_id":Number,
    "p_name":String,
    "p_cost":Number
});

let Product = mongoose.model("Product",productSchema);


app.get("/product",(req,res)=>{
    res.render("product");
});

app.post("/product",(req,res)=>{
    console.log("post request");
    console.log(
        req.query  
    );
    let newProduct = new Product({
        "p_id":111111,
        "p_name":'product_one',
        "p_cost":200000000
    });
    newProduct.save((err,Product)=>{
        if(err) throw err;
        else{
            console.log(Product);
        }
    });
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});