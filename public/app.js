document
  .getElementById("flightForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission which reloads the page

    const flightNumber = document.getElementById("flightNumber").value;
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    const response = await fetch("/api/flight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ flightNumber }),
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status} ${response.statusText}`;
      resultsContainer.innerHTML = `<p class="error">${message}</p>`;
      return;
    }

    const result = await response.json(); // Parse the JSON response from the server
    console.log(JSON.stringify(result));

    // Check if the data format is correct and that there is data available
    if (result.success && result.data && Array.isArray(result.data.data)) {
      if (result.data.data.length > 0) {
        result.data.data.forEach((flight) => {
          const flightInfoDiv = document.createElement("div");
          flightInfoDiv.className = "flight-info";
          flightInfoDiv.innerHTML = `
          <h3>Flight Details for ${flight.flight.iata}</h3>
          <p>Status: ${flight.flight_status}</p>
          <p>Departure Time: ${flight.departure.scheduled}</p>
          <p>Departing Airport: ${flight.departure.airport} (Terminal: ${flight.departure.terminal}, Gate: ${flight.departure.gate})</p>
          <p>Arrival Airport: ${flight.arrival.airport}</p>
          <p>Aircraft Type: ${flight.aircraft ? flight.aircraft.model : "N/A"}</p>
          <p>Manufacturer: ${flight.aircraft ? flight.aircraft.manufacturer : "N/A"}</p>
          <p>Registration: ${flight.aircraft ? flight.aircraft.registration : "N/A"}</p>
          <p>Aircraft IATA Code: ${flight.aircraft ? flight.aircraft.iata : "N/A"}</p>
        `;
          resultsContainer.appendChild(flightInfoDiv);
        });
      } else {
        resultsContainer.innerHTML =
          "<p>No flight details available for the given flight number.</p>";
      }
    } else {
      resultsContainer.innerHTML =
        "<p>No flight details available or incorrect data format received.</p>";
    }
  });
