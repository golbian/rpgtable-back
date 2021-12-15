const mongoose = require("mongoose");

mongoose.set('debug', true);

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.character = require("./character.model")(mongoose);
db.map = require("./map.model")(mongoose);
db.role = require("./role.model")(mongoose);
db.table = require("./table.model")(mongoose);
db.user = require("./user.model")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;