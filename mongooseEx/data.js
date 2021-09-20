const bcrypt  = require("bcryptjs");

const data = {
    "users":[
        {
            "name":"AshokIT",
            "password":bcrypt.hashSync("hr@ashokit.in",8),
            "isAdmin":true,
            "email":"hr@ashokit.in"
        },
        {
            "name":"AshokIT1",
            "password":bcrypt.hashSync("hr1@ashokit.in",8),
            "isAdmin":true,
            "email":"hr1@ashokit.in"
        }
    ]
};

module.exports = data;

