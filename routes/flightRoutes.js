// /routes/flightRoutes.js
const express = require("express");
const router = express.Router();
const { getFlightData } = require("./../controllers/flightController");

router.post("/flight", getFlightData);

module.exports = router;
