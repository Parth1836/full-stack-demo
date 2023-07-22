const sequelize = require("../db-connect/dbConfig");
const DataTypes = require("sequelize");

const customerSolution = sequelize.define("customerSolution",{
    cs_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cs_name: {
        type: DataTypes.STRING
    },
    cs_desc: {
        type: DataTypes.STRING
    },
    hub: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    year: {
        type: DataTypes.STRING
    },
},
{
    freezeTableName: true,
    timestamps: false,
    tableName: "customer_solution",
    schema: "",
});

module.exports = customerSolution;