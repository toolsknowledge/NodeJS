const brcryptjs = require("bcryptjs");
const data = {
    users : [
        {"name":"admin1",
         "password":brcryptjs.hashSync("1234",8),
         "isManager":true},
        {"name":"admin2",
        "password":brcryptjs.hashSync("1234",8),
        "isManager":false},
        {"name":"admin3",
        "password":brcryptjs.hashSync("1234",8),
        "isManager":false},
        {"name":"admin4",
        "password":brcryptjs.hashSync("1234",8),
        "isManager":true},
        {"name":"admin5",
        "password":brcryptjs.hashSync("1234",8),
        "isManager":true}
    ]
};
module.exports = data;