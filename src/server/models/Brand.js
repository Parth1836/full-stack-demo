const dbConnection = require("../db-connect/dbConfig");
const sequelize = require("sequelize");

const brand = dbConnection.define("brands",{
    brand_id : {
        type : sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    brand_name: {
        type: sequelize.STRING
    },
},
{
    freezeTableName: true,
    timestamps: false,
    tableName: "brands",
    schema: "",
});

module.exports = brand;