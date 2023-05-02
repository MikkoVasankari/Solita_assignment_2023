import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Stations from "./pages/stations";
import Journeys from "./pages/journeys";
import SingleStations from "./pages/singleStation";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/stations",
    element: <Stations />,
  },
  {
    path: "/journeys",
    element: <Journeys />,
  },
  {
    path: "/singleStation/:id",
    element: <SingleStations />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>)
}

export default App;
