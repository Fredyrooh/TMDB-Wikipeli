const S = require("sequelize")
const db = require("../config")

class UserFriend extends S.Model { }

UserFriend.init(
    {
        user_id: {
            TYPE: S.INTEGER,
        },
        friend_id: {
            TYPE: S.ARRAY(S.INTEGER),
        },
    }, {sequelize : db, tableName: 'users_friends',
});

module.exports = UserFriend