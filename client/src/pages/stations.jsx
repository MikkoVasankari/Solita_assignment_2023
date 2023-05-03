import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stations() {
  const [stations, setStations] = useState([]);

  let navigate = useNavigate();

  const fetchStations = async () => {
    try {
      let response = await fetch("http://localhost:3001/stations");
      let json = await response.json();

      setStations(json);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (ID) => {
    let path = "/singlestation/" + ID;
    navigate(path);
  };

  useEffect(() => {
    fetchStations();
  }, []);


  return (
    <div className="App">
      
      <button onClick={() => navigate("/")}>Go Back</button>

      <p>Stations</p>
      <p>Click on station to view more information</p>

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
