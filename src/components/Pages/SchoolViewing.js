import "./styles/SchoolViewing.css"
import { BackButton } from "../custom_components"
import { Outlet } from "react-router-dom"
function SchoolView({ className = "", topBarTitle = "Schools Near You" }) {

	return (
		<div className={`main-view ${className}`}>
			<div className="top-bar">
				<BackButton className="back-button" />
				<p className="page-label">
					{topBarTitle}
				</p>
			</div>
			<div className="page-content">
				<Outlet />
			</div>
		</div>
	)
}

export default SchoolView
