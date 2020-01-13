const Sequelize = require("sequelize");

const sequelize = new Sequelize("U-MANAGER", "postgres", "bacale", {
  // logging: false,
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false
  },
});

module.exports = sequelize;