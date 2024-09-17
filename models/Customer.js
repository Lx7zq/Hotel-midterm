const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const Role = require('./Role'); // Import Role model

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
    roleId: {  // เพิ่มฟิลด์ roleId
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,  // เชื่อมกับ Role model
            key: 'id',
        }
    }
});

// สร้างความสัมพันธ์ระหว่าง Customer กับ Role
Customer.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(Customer, { foreignKey: 'roleId' });

module.exports = Customer;
