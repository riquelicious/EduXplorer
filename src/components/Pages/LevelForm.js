import {
	ToggleButton,
	DropDown,
	NamedDiv,
	SearchBar,
} from "../custom_components";
import "./styles/LevelForm.css";

function LevelForm() {
	return (
		<div className="main-container">
			<DropDown className="select-container" name="School Level" />
			<NamedDiv className="search-container" name={"Select Courses/Tracks"}>
				<SearchBar className="search-bar" />
				<CourseContainer />
			</NamedDiv>
		</div>
	);
}

function CourseContainer() {
	return (
		<div className="course-container">
			<ToggleButton unique_key={0} />
			<ToggleButton unique_key={1} />
			<ToggleButton unique_key={2} />
		</div>
	);
}

export default LevelForm;
