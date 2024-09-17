const Room = require('../models/Room'); // นำเข้าโมเดล Room

// สร้างห้องพักใหม่
exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: "Error creating room", error });
  }
};

// ดึงข้อมูลห้องพักทั้งหมด
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving rooms", error });
  }
};

// ดึงข้อมูลห้องพักโดยใช้ ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving room", error });
  }
};

// ปรับปรุงข้อมูลห้องพักที่มีอยู่
exports.updateRoom = async (req, res) => {
  try {
    const [updated] = await Room.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedRoom = await Room.findByPk(req.params.id);
      res.status(200).json(updatedRoom);
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating room", error });
  }
};

// ลบห้องพัก
exports.deleteRoom = async (req, res) => {
  try {
    const deleted = await Room.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Room not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting room", error });
  }
};
