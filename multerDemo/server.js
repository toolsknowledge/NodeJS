var express = require("express");
var multer = require("multer");

var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.jpg');
    }
})
var upload = multer({ storage: storage }).single('profileImage');

app.post('/profile', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.json({"status":false});
        }
        res.json({"status":true});
    })
})

app.listen(8080);
console.log("Server Listening the port no.8080");