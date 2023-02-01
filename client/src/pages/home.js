import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <a>Home page</a>
      <br></br>
      <button onClick={() => navigate("/stations/")}>Go to stations</button>
      <br></br>
      <button onClick={() => navigate("/journeys/")}>Go to journeys</button>
    </div>
  );
}

export default Home;
