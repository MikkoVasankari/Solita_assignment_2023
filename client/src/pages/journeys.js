import { useEffect, useState } from "react";

function Journeys() {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      let response = await fetch("http://localhost:3001/trips");
      let json = await response.json();

      console.log(json);
      setTrips(json);
    } catch (error) {
      console.log(error);
    }
  };

  const tiedonMuokkaus = (item) => {
    for (let i = 0; i < trips.length; i++) {
      const inKm = item[i].covered_distance / 1000;

      //console.log(inKm + " Km");

      const inMin = item[i].duration / 60;
      const stringMin = String(inMin);
      const slicedToMin = stringMin.slice(0, 1);

      //trips.push(

      //)

    }
  };

  tiedonMuokkaus(trips);

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
      <a>Departure</a> <a>Return</a> <a>Distance</a> <a>Duration</a>
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
