const Reservation = require('../models/Reservation');

// สร้างการจองใหม่
exports.createReservation = async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: "Error creating reservation", error });
    }
};

// ดึงข้อมูลการจองทั้งหมด
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving reservations", error });
    }
};

// ดึงข้อมูลการจองโดยใช้ ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation) {
            res.status(200).json(reservation);
        } else {
            res.status(404).json({ message: "Reservation not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving reservation", error });
    }
};

// ปรับปรุงการจอง
exports.updateReservation = async (req, res) => {
    try {
        const [updated] = await Reservation.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedReservation = await Reservation.findByPk(req.params.id);
            res.status(200).json(updatedReservation);
        } else {
            res.status(404).json({ message: "Reservation not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating reservation", error });
    }
};

// ลบการจอง
exports.deleteReservation = async (req, res) => {
    try {
        const deleted = await Reservation.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Reservation not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting reservation", error });
    }
};
