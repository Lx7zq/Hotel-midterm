const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleName: {
        type: DataTypes.ENUM('admin', 'manager', 'customer'),
        allowNull: false,
        unique: true,  
    },
});

module.exports = Role;
