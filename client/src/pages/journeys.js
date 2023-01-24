import { useEffect, useState } from "react";

function Journeys() {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      let response = await fetch("http://localhost:3001/trips");
      let json = await response.json();

      //console.log(json);
      setTrips(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  // List journeys
  // If you don't implement pagination, use some hard-coded limit for the list length because showing several million rows would make any browser choke
  // For each journey show departure and return stations, covered distance in kilometers and duration in minutes

  return (
    <div className="App">
      <a>Journeys</a>
      {trips.map((item) => {
        return (
          <ul key={item.ID}>
            {item.departure_station_name} - {item.return_station_name}{" "}
            {item.covered_distance}m {item.duration}s
          </ul>
        );
      })}
    </div>
  );
}

export default Journeys;
