const S = require("sequelize")
const db = require("../config")
const bcrypt = require("bcrypt")

class User extends S.Model {}

User.init(
    {
    name : {
        type: S.STRING,
        allowNull: false
    },
    password : {
        type: S.STRING,
        allowNull: false,
    },
    salt : {
        type :S.STRING,
    },
    email : {
        type: S.STRING,
        allowNull : false,
        validate:{
            isEmail: true,
        }
    },
},{sequelize : db, modelName : "user"})

User.prototype.genHash = function(pass,sl){         //Metodo para crear el hash que encripta la contraseña
    return bcrypt.hash(pass,sl)
}

User.prototype.validatePassword = function (pass){
    return this.genHash(pass,this.salt)
    .then((newHash)=>newHash === this.password)
}

User.addHook("beforeCreate",function (user){        // Hook que antes de crear el user crea una salt para poder igualaar el hash creado 
    const salt = bcrypt.genSaltSync()              // a la contraseña y guardar el pass como un hash
    user.salt= salt
    return user.genHash(user.password, user.salt)
    .then(hash =>user.password= hash)
})

module.exports = User