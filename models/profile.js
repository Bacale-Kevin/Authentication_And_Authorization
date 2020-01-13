const Sequelize = require("sequelize");

const sequelize = require("../server");

const Profile = sequelize.define("profile", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING
});

module.exports = Profile;
