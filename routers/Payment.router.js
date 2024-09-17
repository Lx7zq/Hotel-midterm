const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/Payment.Controllers');

// สร้างการชำระเงินใหม่
router.post('/payments', paymentController.createPayment);

// ดึงข้อมูลการชำระเงินทั้งหมด
router.get('/payments', paymentController.getAllPayments);

// ดึงข้อมูลการชำระเงินโดยใช้ ID
router.get('/payments/:id', paymentController.getPaymentById);

// ปรับปรุงข้อมูลการชำระเงิน
router.put('/payments/:id', paymentController.updatePayment);

// ลบการชำระเงิน
router.delete('/payments/:id', paymentController.deletePayment);

module.exports = router;
