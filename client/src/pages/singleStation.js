import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleStations() {
  const [station, setStation] = useState([]);
  const [stationDeparture, setStationDeparture] = useState([]);
  const [stationReturn, setStationReturn] = useState([]);

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

  const fetchSinsgleStationDeparatures = async () => {
    try {
      let response = await fetch(
        "http://localhost:3001/singlestation/" + id + "/departure"
      );
      let json = await response.json();

      setStationDeparture(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSinsgleStationReturns = async () => {
    try {
      let response = await fetch(
        "http://localhost:3001/singlestation/" + id + "/return"
      );
      let json = await response.json();

      setStationReturn(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleStations();
    fetchSinsgleStationDeparatures();
    fetchSinsgleStationReturns();
  }, []);

  return (
    <div className="App">
      <a>Station</a>
      {station.map((item) => {
        return (
          <ul key={item.ID}>
            {item.NAME}<br></br> Station address: {item.OSOITE} <br></br> Amount of departures:{" "}
            {stationDeparture.length}
            <br></br> Amount of returns: {stationReturn.length}
          </ul>
        );
      })}
    </div>
  );
}

export default SingleStations;
