const Payment = require('../models/Payment');

// สร้างการชำระเงินใหม่
exports.createPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: "Error creating payment", error });
    }
};

// ดึงข้อมูลการชำระเงินทั้งหมด
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving payments", error });
    }
};

// ดึงข้อมูลการชำระเงินโดยใช้ ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: "Payment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving payment", error });
    }
};

// ปรับปรุงข้อมูลการชำระเงิน
exports.updatePayment = async (req, res) => {
    try {
        const [updated] = await Payment.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedPayment = await Payment.findByPk(req.params.id);
            res.status(200).json(updatedPayment);
        } else {
            res.status(404).json({ message: "Payment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating payment", error });
    }
};

// ลบการชำระเงิน
exports.deletePayment = async (req, res) => {
    try {
        const deleted = await Payment.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Payment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting payment", error });
    }
};
