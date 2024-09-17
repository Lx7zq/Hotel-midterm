const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const Customer = require('./Customer');
const Product = require('./Product');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    customerId: {
        type: DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'id',
        },
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'shipped', 'delivered', 'cancelled'),
        defaultValue: 'pending',
    },
});

// สร้างความสัมพันธ์ระหว่าง Order และ Product (หลายต่อหลาย)
Order.belongsToMany(Product, { through: 'OrderProducts', foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: 'OrderProducts', foreignKey: 'productId' });

module.exports = Order;
