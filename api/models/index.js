const Users = require("./Users")
// const WatchList = require("./WatchList")

// Users.hasOne(WatchList,{ through: 'watchlist', as: 'favorite'})
// WatchList.hasOne(Users, { through: 'watchlist', as: 'favorite'})

// Users.belongsToMany(Users, { 
//     as: 'friends',
//     foreignKey: 'user_id',
//     through: "UsersFriends"
//   });
//   Users.belongsToMany(Users, { 
//     as: 'userFriends',
//     foreignKey: 'friend_id',
//     through: "UsersFriends"
//   });

module.exports = {Users } 