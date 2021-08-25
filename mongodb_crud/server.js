const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const module1 = require("./get_products");
app.use("/products",module1);
const module2 = require("./post_products");
app.use("/insert",module2);
let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log("server listening the port number 8080");
});