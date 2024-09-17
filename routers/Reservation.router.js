const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/Reservation.Controllers');

// สร้างการจองใหม่
router.post('/reservations', reservationController.createReservation);

// ดึงข้อมูลการจองทั้งหมด
router.get('/reservations', reservationController.getAllReservations);

// ดึงข้อมูลการจองโดยใช้ ID
router.get('/reservations/:id', reservationController.getReservationById);

// ปรับปรุงการจอง
router.put('/reservations/:id', reservationController.updateReservation);

// ลบการจอง
router.delete('/reservations/:id', reservationController.deleteReservation);

module.exports = router;
