const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// นำเข้ารูทเตอร์
const roomRoutes = require("./routers/Room.router");
const staffRoutes = require("./routers/Staff.router");
const paymentRoutes = require("./routers/Payment.router");
const reservationRoutes = require("./routers/Reservation.router"); // ถ้ามีโมเดล Reservation

// ใช้ middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // เพิ่ม CORS

// ใช้ router
app.use('/api/rooms', roomRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reservations', reservationRoutes); // ถ้ามีโมเดล Reservation

// Route พื้นฐาน
app.get("/", (req, res) => {
    res.send("<h1>Hello hotel API</h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong", error: err.message });
});

// เชื่อมต่อฐานข้อมูลและซิงค์โมเดล
const sequelize = require("./models/db");
sequelize.sync({ alter: true }).then(() => {
    console.log("Database synchronized");
}).catch(err => {
    console.error("Error syncing database:", err);
});

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
});
