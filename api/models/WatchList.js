const { UniqueConstraintError } = require("sequelize")
const S = require("sequelize")
const db = require("../config")

class WatchList extends S.Model { }

WatchList.init({
       idMovie : {
        type:S.ARRAY(S.INTEGER),
        allowNull: false,
        unique: true
    },
        fav:{
            type:S.BOOLEAN,
            defaultValue:false
        }
}, { sequelize: db, modelName: "watchList" })





module.exports = WatchList

