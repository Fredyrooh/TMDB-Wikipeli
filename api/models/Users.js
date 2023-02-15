const S = require("sequelize")
const db = require("../config")
const bcrypt = require("bcrypt")

class User extends S.Model {}

User.init(
    {
    name : {
        type: S.STRING,
        allowNull: false,
        unique:true
    },
    img:{
        type:S.STRING
    },
    password : {
        type: S.STRING,
        allowNull: false,
    },
    fav: {
        type:S.ARRAY(S.INTEGER)
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

User.prototype.validatePassword = async function (pass){
    const newHash = await this.genHash(pass, this.salt)
    return newHash === this.password
}

User.addHook("beforeCreate",function (user){        // Hook que antes de crear el user crea una salt para poder igualaar el hash creado 
    const salt = bcrypt.genSaltSync()              // a la contraseña y guardar el pass como un hash
    user.salt= salt
    return user.genHash(user.password, user.salt)
    .then(hash =>user.password= hash)
})

module.exports = User