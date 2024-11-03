import { NamedDiv } from "../custom_components";
import "./styles/Confirmation.css";

function Confirmation({
	region = "N/A",
	province = "N/A",
	city = "N/A",
	barangay = "N/A",
	courses = [],
}) {
	return (
		<div className="main-container">
			<div className="confirmation-container">
				<NamedDiv name="Region" className="confirmation-detail">
					<ul>
						<li className="confirmation-detail-item">{region}</li>
					</ul>
				</NamedDiv>
				<NamedDiv name="Province" className="confirmation-detail">
					<ul>
						<li className="confirmation-detail-item">{province}</li>
					</ul>
				</NamedDiv>
				<NamedDiv name="City" className="confirmation-detail">
					<ul>
						<li className="confirmation-detail-item">{city}</li>
					</ul>
				</NamedDiv>
				<NamedDiv name="Barangay" className="confirmation-detail">
					<ul>
						<li className="confirmation-detail-item">{barangay}</li>
					</ul>
				</NamedDiv>
				<NamedDiv name="Courses/Tracks" className="confirmation-detail">
					<ul>
						<li className="confirmation-detail-item">{courses}</li>
					</ul>
				</NamedDiv>
			</div>
		</div>
	);
}

export default Confirmation;
