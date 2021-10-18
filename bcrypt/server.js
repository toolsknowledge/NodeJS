const bcrypt = require("bcrypt");

bcrypt.hash("ashokit",10).then((posRes)=>{
    console.log(posRes);
})

console.log(
    bcrypt.compareSync("ashokit","$2b$10$n5bkFqQo6ZSUuoaA8cGN4ejncXQC1sNkQaAiDyaOdjFmNoA/lUmWS")
);