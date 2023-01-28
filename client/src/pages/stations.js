import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stations() {
  const [stations, setStations] = useState([]);

  const fetchStations = async () => {
    try {
      let response = await fetch("http://localhost:3001/stations");
      let json = await response.json();

      setStations(json);
    } catch (error) {
      console.log(error);
    }
  };

  let navigate = useNavigate();
  const handleClick = (ID) => {
    let path = "././singlestation/" + ID;
    navigate(path);
  };

  useEffect(() => {
    fetchStations();
  }, []);

  return (
    <div className="App">
      <a>Stations</a>
      {stations.map((item) => {
        return (
          <ul key={item.ID}>
            <li onClick={() => handleClick(item.ID)}>
              {item.ID}. {item.NAME} {item.OSOITE}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Stations;
