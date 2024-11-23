import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import "./App.css";
import LoginPage from "./components/Pages/LoginPage";
import MainForm from "./components/Pages/MainForm";
import LocationForm from "./components/Pages/LocationForm";
import LevelForm from "./components/Pages/LevelForm";
import Confirmation from "./components/Pages/Confirmation";
import SchoolView from "./components/Pages/SchoolViewing";
import SchoolsNear from "./components/Pages/SchoolsNear";
import SchoolProfile from "./components/Pages/SchoolProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/EduXplorer/",
    element: <LoginPage />,
  },
  {
    path: "/EduXplorer/Form/",
    element: <MainForm />,
    children: [
      {
        path: "Location",
        element: <LocationForm />,
      },
      {
        path: "SchoolLevel",
        element: <LevelForm />,
      },
      {
        path: "Confirmation",
        element: <Confirmation />,
      },
    ],
  },
  {
    path: "/EduXplorer/Schools/",
    element: <SchoolView />,
    children: [
      {
        path: "NearbySchools",
        element: <SchoolsNear />,
      },
      {
        path: "SchoolProfile",
        element: <SchoolProfile />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    document.title = "EduXplorer"; // Sets the title
  }, []);

  return (
    <AppProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AppProvider>
  );
}

export default App;
