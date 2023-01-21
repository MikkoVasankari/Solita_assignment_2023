import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trips, setTrips] = useState([]);
  const [stations, setStations] = useState([]);


  const fetchStations = async () => {
    try {
      let response = await fetch("http://localhost:3001/stations",);
      let json = await response.json();

      console.log(json);
      setStations(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);

  return (
    <div className="App">
      
      <a>Asemia</a>
      {stations.map((item) => {
        return (
            <ul key = {item.ID}>
            {item.ID}. {item.NAME} {item.ADDRESS}
            </ul>
        );
      })}
    </div>
  );
}

export default App;
