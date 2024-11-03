import { DropDown } from "../custom_components";
import "./styles/LocationForm.css";
// import FormTemplate from "./FormTemplate";

function LocationForm() {
	return (
		<div className="main-container">
			<DropDown id="region-dropdown" className="select-container" name="Region" />
			<DropDown id="province-dropdown" className="select-container" name="Province" />
			<DropDown id="city-dropdown" className="select-container" name="City" />
			<DropDown id="barangay-dropdown" className="select-container" name="Barangay" />
		</div>
	);
}

export default LocationForm;
