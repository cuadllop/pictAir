// /controllers/flightController.js
const flightService = require("./../services/flightService.js");

exports.getFlightData = async (req, res) => {
  try {
    const { flightNumber } = req.body;
    const flightData = await flightService.fetchFlightData(flightNumber);
    res.json({ success: true, data: flightData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
