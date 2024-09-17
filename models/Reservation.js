const { DataTypes } = require('sequelize');
const sequelize = require("./db");
const Room = require('./Room'); // เชื่อมต่อกับโมเดล Room

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending', // หรือ confirmed, cancelled
    },
    guestCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

// ความสัมพันธ์: การจองต้องเกี่ยวกับห้องพัก
Reservation.belongsTo(Room, { foreignKey: 'roomId' });
Room.hasMany(Reservation, { foreignKey: 'roomId' });

module.exports = Reservation;
