import "./styles/SchoolsNear.css";
import { useNavigate } from "react-router-dom";
import { RatingMedal } from "../custom_components";

function SchoolsNear() {
	const schools = [
		{ id: 1, name: "University of the Philippines Diliman", location: "Quezon City", contact: "(02) 981 8500" },
		{ id: 2, name: "Ateneo de Manila University", location: "Quezon City", contact: "(02) 426 6001" },
		{ id: 3, name: "De La Salle University", location: "Manila", contact: "(02) 523 4261" },
		{ id: 4, name: "University of Santo Tomas", location: "Manila", contact: "(02) 406 1611" },
		{ id: 5, name: "Far Eastern University", location: "Manila", contact: "(02) 735 5621" },
		{ id: 6, name: "Map a Institute of Technology", location: "Manila", contact: "(02) 254 1111" },
		{ id: 7, name: "Philippine Normal University", location: "Manila", contact: "(02) 336 1297" },
		{ id: 8, name: "Polytechnic University of the Philippines", location: "Manila", contact: "(02) 716 7832" },
		{ id: 9, name: "University of the East", location: "Manila", contact: "(02) 735 5471" },
		{ id: 10, name: "National University", location: "Manila", contact: "(02) 712 2444" },
	]

	return (
		<div className="school-item-container">
			{schools.map((school) =>
				<SchoolItem
					key={school.id}
					schoolName={school.name}
					location={school.location}
					contact={school.contact}
				/>
			)}
		</div>
	);
}

const SchoolItem = ({ schoolName = "School Name", location = "Location", contact = "Contact", rating = "Unrated", schoolData = {} }) => {
	const navigate = useNavigate();
	const data = { schoolData };
	console.log(data);

	const handleClick = () => {
		navigate("/EduXplorer/Schools/SchoolProfile", { state: data });
	}
	return (
		<div className="school-item" onClick={handleClick}>
			<BookImage imageId={null} />
			<div className="school-info">
				<p className="item-label">{schoolName}</p>
				<p className="item-label">{location}</p>
				<p className="item-label">{contact}</p>
			</div>
			<RatingMedal className="ratings" rating={rating} />
		</div>
	);
};

const BookImage = () => {
	return (
		<div className="blank-image" />
	);
};

export default SchoolsNear
