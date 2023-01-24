import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Stations from "./pages/stations";
import Journeys from  "./pages/journeys";
import SingleStations from "./pages/singleStation";

// npm i react-router-dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
    path: "/singleStation",
    element: <SingleStations />,
  },
]);

function App() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
