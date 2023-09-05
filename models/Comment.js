const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

class Comment extends Model {}

Comment.init();

module.exports = Comment;