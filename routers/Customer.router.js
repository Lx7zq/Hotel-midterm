const express = require('express');
const router = express.Router();
const customerController = require('../controllers/Customer.Controllers');

// สร้างลูกค้าใหม่
router.post('/customers', customerController.createCustomer);

// ดึงข้อมูลลูกค้าทั้งหมด
router.get('/customers', customerController.getAllCustomers);

// ดึงข้อมูลลูกค้าโดยใช้ ID
router.get('/customers/:id', customerController.getCustomerById);

// ปรับปรุงข้อมูลลูกค้า
router.put('/customers/:id', customerController.updateCustomer);

// ลบข้อมูลลูกค้า
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;
