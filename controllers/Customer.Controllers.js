const Customer = require('../models/Customer');

// สร้างลูกค้าใหม่
exports.createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Error creating customer", error });
    }
};

// ดึงข้อมูลลูกค้าทั้งหมด
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving customers", error });
    }
};

// ดึงข้อมูลลูกค้าโดยใช้ ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: "Customer not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving customer", error });
    }
};

// ปรับปรุงข้อมูลลูกค้า
exports.updateCustomer = async (req, res) => {
    try {
        const [updated] = await Customer.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedCustomer = await Customer.findByPk(req.params.id);
            res.status(200).json(updatedCustomer);
        } else {
            res.status(404).json({ message: "Customer not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating customer", error });
    }
};

// ลูกค้าทิ้ง
exports.deleteCustomer = async (req, res) => {
    try {
        const deleted = await Customer.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Customer not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting customer", error });
    }
};
