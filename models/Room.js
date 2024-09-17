const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Room = sequelize.define("room", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roomType: {
    type: DataTypes.ENUM("Single", "Double", "Suite", "Deluxe", "Penthouse"),
    allowNull: false,
  },
  roomStatus: {
    type: DataTypes.ENUM("Available", "Occupied", "Reserved", "Maintenance"),
    allowNull: false,
  },
  pricePerNight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  roomSize: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  additionalDetails: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Room.sync({ force: false })
  .then(() => {
    console.log("Room table created or already exists");
  })
  .catch((error) => {
    console.log("Error creating Room table:", error);
  });

module.exports = Room;
