import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <a>Home page</a>
      <br></br>
      <a href="http://localhost:3000/journeys">Click to view journeys</a>
      <br></br>
      <a href="http://localhost:3000/stations">Click to view stations</a>
    </div>
  );
}

export default Home;
