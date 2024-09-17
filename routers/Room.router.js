const express = require('express');
const router = express.Router();
const roomController = require('../controllers/Room.Controllers'); // ตรวจสอบเส้นทางให้ถูกต้อง

// สร้างห้องพักใหม่
router.post('/rooms', roomController.createRoom);

// ดึงข้อมูลห้องพักทั้งหมด
router.get('/rooms', roomController.getAllRooms);

// ดึงข้อมูลห้องพักโดยใช้ ID
router.get('/rooms/:id', roomController.getRoomById);

// ปรับปรุงข้อมูลห้องพัก
router.put('/rooms/:id', roomController.updateRoom);

// ลบห้องพัก
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
