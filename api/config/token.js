const jwt = require("jsonwebtoken")
const SECRET = "MATELISTO"

const genereteToken = function (payload){
const token = jwt.sign(payload,SECRET,{expiresIn: "2d"})
return token
}


const validateToken = function (){

}

module.exports = {genereteToken,validateToken}