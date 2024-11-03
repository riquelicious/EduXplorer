import { Outlet } from "react-router-dom";
import FormTemplate from "./FormTemplate";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form1Page from "./Form1Page";
// import Form2Page from "./Form2Page";
// import Form3Page from "./Form3Page";


// const router = createBrowserRouter([
// 	{
// 		path: "/EduXplorer/Form",
// 		element: <div></div>,

// 	}
// ])
function MainForm() {
	return (
		<FormTemplate
			formName="Location"
			infoContents="INFO: Please select your province, region, city, and barangay to help us find schools near you."
		>
			<Outlet />
		</FormTemplate>
	);
}

export default MainForm;
