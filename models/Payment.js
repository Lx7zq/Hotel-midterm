const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const Reservation = require('./Reservation');

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    method: {
        type: DataTypes.STRING, // เช่น credit card, paypal, หรือ cash
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING, // เช่น paid, pending, หรือ failed
        defaultValue: 'pending',
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

// ความสัมพันธ์: การชำระเงินเชื่อมต่อกับการจอง
Payment.belongsTo(Reservation, { foreignKey: 'reservationId' });
Reservation.hasMany(Payment, { foreignKey: 'reservationId' });

module.exports = Payment;
