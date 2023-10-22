const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "ParthDataBase",
    "root",
    "Furious@1836", {
    host: "localhost",
    dialect: "mysql",
    // operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
    }
}
);
// sequelize.authenticate().then(() => {
//     console.log("Connection has been established successfully.");
// }).catch((error) => {
//     console.log("Unable to connect to the databse:", error);
// })
// const testConnection = aysnc () => {
//     try {
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.log("Unable to connect to the databse:", error);
//     }
// };

//testConnection();

module.exports = sequelize;
