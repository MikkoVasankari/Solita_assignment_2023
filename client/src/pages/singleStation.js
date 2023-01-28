import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleStations() {
  const [station, setStation] = useState([]);

  let { id } = useParams();

  const fetchSingleStations = async () => {
    try {
      let response = await fetch("http://localhost:3001/singlestation/" + id);
      let json = await response.json();

      setStation(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleStations();
  }, []);

  //  Station name
  //  Station address
  //  Total number of journeys starting from the station
  //  Total number of journeys ending at the station

  return (
    <div className="App">
      <a>Station</a>
      {station.map((item) => {
        return (
          <ul key={item.ID}>
            {item.NAME} {item.OSOITE}
          </ul>
        );
      })}
    </div>
  );
}

export default SingleStations;
