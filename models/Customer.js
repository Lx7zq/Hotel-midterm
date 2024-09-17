const { DataTypes } = require('sequelize');
const sequelize = require("./db");

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Customer;
