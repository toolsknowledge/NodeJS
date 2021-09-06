const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://admin:admin@cluster0.rtyas.mongodb.net/nodejs?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const module1 = require("./users");
app.use("/",module1);
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});

