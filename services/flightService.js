// services/flightService.js
const config = require("../config.json");

function fetchFlightData(flightNumber) {
  if (config.useMockApi) {
    return mockFlightData(flightNumber);
  } else {
    return realFlightData(flightNumber);
  }
}

function mockFlightData(flightNumber) {
  switch (flightNumber) {
    case "IB3166":
      return Promise.resolve(mockDataForIberia());
    case "JL42":
      return Promise.resolve(mockDataForJAL());
    default:
      return Promise.resolve(mockDataForAirFrance());
  }
}

function mockDataForIberia() {
  return {
    success: true,
    data: {
      pagination: {
        limit: 100,
        offset: 0,
        count: 2,
        total: 2,
      },
      data: [
        {
          flight_date: "2024-04-20",
          flight_status: "scheduled",
          departure: {
            airport: "Barajas",
            timezone: "Europe/Madrid",
            iata: "MAD",
            icao: "LEMD",
            terminal: "4S",
            gate: "S",
            delay: 17,
            scheduled: "2024-04-20T15:45:00+00:00",
            estimated: "2024-04-20T15:45:00+00:00",
            actual: null,
            estimated_runway: null,
            actual_runway: null,
          },
          arrival: {
            airport: "Heathrow",
            timezone: "Europe/London",
            iata: "LHR",
            icao: "EGLL",
            terminal: "5",
            gate: null,
            baggage: null,
            delay: null,
            scheduled: "2024-04-20T17:15:00+00:00",
            estimated: "2024-04-20T17:15:00+00:00",
            actual: null,
            estimated_runway: null,
            actual_runway: null,
          },
          airline: {
            name: "Iberia",
            iata: "IB",
            icao: "IBE",
          },
          flight: {
            number: "3166",
            iata: "IB3166",
            icao: "IBE3166",
            codeshared: null,
          },
          aircraft: {
            model: "Airbus A320",
            registration: "EC-XYZ",
            manufacturer: "Airbus",
          },
          live: null,
        },
        {
          flight_date: "2024-04-19",
          flight_status: "landed",
          departure: {
            airport: "Barajas",
            timezone: "Europe/Madrid",
            iata: "MAD",
            icao: "LEMD",
            terminal: "4S",
            gate: "S12",
            delay: 34,
            scheduled: "2024-04-19T15:45:00+00:00",
            estimated: "2024-04-19T15:45:00+00:00",
            actual: "2024-04-19T16:19:00+00:00",
            estimated_runway: "2024-04-19T16:19:00+00:00",
            actual_runway: "2024-04-19T16:19:00+00:00",
          },
          arrival: {
            airport: "Heathrow",
            timezone: "Europe/London",
            iata: "LHR",
            icao: "EGLL",
            terminal: "5",
            gate: null,
            baggage: "10",
            delay: null,
            scheduled: "2024-04-19T17:15:00+00:00",
            estimated: "2024-04-19T17:15:00+00:00",
            actual: "2024-04-19T17:12:00+00:00",
            estimated_runway: "2024-04-19T17:12:00+00:00",
            actual_runway: "2024-04-19T17:12:00+00:00",
          },
          airline: {
            name: "Iberia",
            iata: "IB",
            icao: "IBE",
          },
          flight: {
            number: "3166",
            iata: "IB3166",
            icao: "IBE3166",
            codeshared: null,
          },
          aircraft: {
            model: "Airbus A320",
            registration: "EC-XYZ",
            manufacturer: "Airbus",
          },
          live: null,
        },
      ],
    },
  };
}
function mockDataForJAL() {
  return {
    success: true,

    data: [
      {
        flight_date: "2024-04-21",
        flight_status: "active",
        departure: {
          airport: "Heathrow",
          timezone: "Europe/London",
          iata: "LHR",
          icao: "EGLL",
          terminal: "3",
          gate: "25",
          delay: null,
          scheduled: "2024-04-21T09:40:00+00:00",
          estimated: "2024-04-21T09:40:00+00:00",
          actual: null,
          estimated_runway: null,
          actual_runway: null,
        },
        arrival: {
          airport: "Haneda Airport",
          timezone: "Asia/Tokyo",
          iata: "HND",
          icao: "RJTT",
          terminal: "3",
          gate: null,
          baggage: null,
          delay: null,
          scheduled: "2024-04-22T07:15:00+00:00",
          estimated: "2024-04-22T07:15:00+00:00",
          actual: null,
          estimated_runway: null,
          actual_runway: null,
        },
        airline: {
          name: "JAL",
          iata: "JL",
          icao: "JAL",
        },
        flight: {
          number: "42",
          iata: "JL42",
          icao: "JAL42",
          codeshared: null,
        },
        aircraft: {
          registration: "JA841J",
          model: "Boeing 787-8",
          manufacturer: "Boeing",
          iata: "B788", // IATA code for Boeing 787-8
          icao: "B788",
          icao24: "86DCC4",
        },
        live: null,
      },
      {
        flight_date: "2024-04-20",
        flight_status: "landed",
        departure: {
          airport: "Heathrow",
          timezone: "Europe/London",
          iata: "LHR",
          icao: "EGLL",
          terminal: "3",
          gate: "25",
          delay: 28,
          scheduled: "2024-04-20T09:40:00+00:00",
          estimated: "2024-04-20T09:40:00+00:00",
          actual: "2024-04-20T10:08:00+00:00",
          estimated_runway: "2024-04-20T10:08:00+00:00",
          actual_runway: "2024-04-20T10:08:00+00:00",
        },
        arrival: {
          airport: "Haneda Airport",
          timezone: "Asia/Tokyo",
          iata: "HND",
          icao: "RJTT",
          terminal: "3",
          gate: null,
          baggage: null,
          delay: 12,
          scheduled: "2024-04-21T07:15:00+00:00",
          estimated: "2024-04-21T07:15:00+00:00",
          actual: "2024-04-21T07:26:00+00:00",
          estimated_runway: "2024-04-21T07:26:00+00:00",
          actual_runway: "2024-04-21T07:26:00+00:00",
        },
        airline: {
          name: "JAL",
          iata: "JL",
          icao: "JAL",
        },
        flight: {
          number: "42",
          iata: "JL42",
          icao: "JAL42",
          codeshared: null,
        },
        aircraft: {
          registration: "JA841J",
          model: "Boeing 787-8",
          manufacturer: "Boeing",
          iata: "B788", // IATA code for Boeing 787-8
          icao: "B788",
          icao24: "86DCC4",
        },
        live: null,
      },
    ],
  };
}

function mockDataForAirFrance() {
  return {
    success: true,
    data: {
      pagination: {
        limit: 100,
        offset: 0,
        count: 1,
        total: 1,
      },
      data: [
        {
          flight_date: "2024-04-22",
          flight_status: "scheduled",
          departure: {
            airport: "Charles de Gaulle",
            timezone: "Europe/Paris",
            iata: "CDG",
            icao: "LFPG",
            terminal: "2E",
            gate: "K2",
            delay: null,
            scheduled: "2024-04-22T14:00:00+00:00",
            estimated: "2024-04-22T14:00:00+00:00",
            actual: null,
            estimated_runway: null,
            actual_runway: null,
          },
          arrival: {
            airport: "Fiumicino",
            timezone: "Europe/Rome",
            iata: "FCO",
            icao: "LIRF",
            terminal: "3",
            gate: null,
            baggage: "5",
            delay: null,
            scheduled: "2024-04-22T16:00:00+00:00",
            estimated: "2024-04-22T16:00:00+00:00",
            actual: null,
            estimated_runway: null,
            actual_runway: null,
          },
          airline: {
            name: "Air France",
            iata: "AF",
            icao: "AFR",
          },
          flight: {
            number: "AF1234",
            iata: "AF1234",
            icao: "AFR1234",
            codeshared: null,
          },
          aircraft: {
            registration: "F-GXYZ",
            model: "Airbus A320",
            manufacturer: "Airbus",
            iata: "A320",
            icao: "A320",
            icao24: "ABCDEF",
          },
          live: null,
        },
      ],
    },
  };
}

async function realFlightData(flightNumber) {
  // Real API call
  try {
    const fetch = (...args) =>
      import("node-fetch").then(({ default: fetch }) => fetch(...args));
    const url = `http://api.aviationstack.com/v1/flights?access_key=b6227b2ebf1644f65bc92e21e1ab1590&flight_iata=${flightNumber.trim().toUpperCase()}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch real flight data:", error);
    // Handle the error appropriately
    return { success: false, error: "Failed to fetch data" };
  }
}

module.exports = {
  fetchFlightData,
};
