const express = require("express");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Require the flight routes module
const flightRoutes = require("./routes/flightRoutes");

// Mount the flight routes under the '/api' prefix
app.use("/api", flightRoutes);

// Define a port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
