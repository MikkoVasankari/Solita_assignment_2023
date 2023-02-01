import { useEffect, useState } from "react";

function Journeys() {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      let response = await fetch("http://localhost:3001/trips");
      let json = await response.json();

      setTrips(json);
    } catch (error) {
      console.log(error);
    }
  };

  function distance(item) {
    const inKm = item.covered_distance / 1000;
    const stringKm = String(inKm);
    const slicedToKm = stringKm.slice(0, 3);
    return <p>Distance: {slicedToKm} km</p>;
  }

  function duration(item) {
    const inMin = item.duration / 60;
    const stringMin = String(inMin);
    const slicedToMin = stringMin.slice(0, 1);
    return <p>Duration: {slicedToMin} minutes</p>;
  }

  useEffect(() => {
    fetchTrips();
  }, []);

  // List journeys
  // If you don't implement pagination, use some hard-coded limit for the list length because showing several million rows would make any browser choke
  // For each journey show departure and return stations,
  // covered distance in kilometers and duration in minutes

  return (
    <div className="App">
      <a>Journeys</a>
      <br></br>
      <p>Departure station  -  Return station </p>
      {trips.map((item) => {
        return (
          <ul key={item.ID}>
            {item.departure_station_name} - {item.return_station_name}{" "}
            {distance(item)} {duration(item)}
          </ul>
        );
      })}
    </div>
  );
}

export default Journeys;
