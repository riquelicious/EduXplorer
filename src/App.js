import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/Pages/LoginPage";
import MainForm from "./components/Pages/MainForm";
import LocationForm from "./components/Pages/LocationForm";
import LevelForm from "./components/Pages/LevelForm";
import Confirmation from "./components/Pages/Confirmation";

const router = createBrowserRouter([
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
			}
		]
	}
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
