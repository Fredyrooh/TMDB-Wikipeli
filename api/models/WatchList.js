const S = require("sequelize")
const db = require("../config")

class WatchList extends S.Model {}

WatchList.init({
    nameMovie : {
        type:S.STRING,
        allowNull: false
    },
},{sequelize:db, modelName : "watchList"})

module.exports = WatchList