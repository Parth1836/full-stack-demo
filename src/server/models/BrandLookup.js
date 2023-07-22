const sequelize = require("../db-connect/dbConfig");
const DataTypes = require("sequelize");

const brandLookup = sequelize.define("brandLookup",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    brand_id: {
        type: DataTypes.INTEGER
    },
    cs_id: {
        type: DataTypes.INTEGER
    },
},
{
    freezeTableName: true,
    timestamps: false,
    tableName: "cs_brand_lookup",
    schema: "",
});

module.exports = brandLookup;