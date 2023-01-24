import { useEffect, useState } from "react";

function Stations() {
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
      
      <a>Stations</a>
      {stations.map((item) => {
        return (
            <ul key = {item.ID}>
            {item.ID}. {item.NAME} {item.OSOITE}
            </ul>
        );
      })}
    </div>
  );
}

export default Stations;
