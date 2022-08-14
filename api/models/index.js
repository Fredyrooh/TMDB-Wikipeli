const Users = require("./Users")
const WatchList = require("./WatchList")

Users.hasMany(WatchList)
WatchList.hasOne(Users)

module.exports = {Users , WatchList} 