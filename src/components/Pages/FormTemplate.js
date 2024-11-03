import { RoundProgressBar, Button } from "../custom_components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/FormTemplate.css";

function FormTemplate({
	children,
	className = "",
}) {
	const maxProgress = 294
	const progressIncrement = maxProgress / 3
	const navigate = useNavigate();
	const [pageTitle, setPageTitle] = useState("Location");
	const [pageCount, setPageCount] = useState(1);
	const [progressPercent, setProgress] = useState(196);
	const [pageInfo, setPageInfo] = useState("Insert Info");

	const nextPage = () => {
		const newPage = Math.min(pageCount + 1, 3);
		const newProg = Math.max(progressPercent - progressIncrement, 0);
		update(newPage, newProg);
	}

	const prevPage = () => {
		const newPage = Math.max(pageCount - 1, 1); // Limit to min page
		const newProg = Math.min(progressPercent + progressIncrement, maxProgress - progressIncrement);
		update(newPage, newProg);
	}

	const update = (page, progress) => {
		setPageCount(page);
		setProgress(progress);
		navigate(getLink(page));
		setPageTitle(getTitle(page));
		setPageInfo(getInfoContents(page));
	}

	return (
		<div className={`form-page ${className}`}>
			<div className="form-header-container">
				<div className="form-header">
					<RoundProgressBar strokeDashoffset={progressPercent} pageCount={pageCount} />
					<h1 className="form-title">{pageTitle}</h1>
				</div>
				<div className="form-info-container">
					<p>{pageInfo}</p>
				</div>
			</div>
			<div className="page-contents">{children}</div>
			<div className="nav-button-container">
				<Button className="nav-button" buttonName="Prev" onClick={prevPage} />
				<Button className="nav-button" buttonName="Next" onClick={nextPage} />
			</div>
		</div>
	);
}

function getLink(pageNumber) {
	let path = `/EduXplorer/Form/Location`;
	switch (pageNumber) {
		case 1:
			path = `/EduXplorer/Form/Location`;
			break;

		case 2:
			path = `/EduXplorer/Form/SchoolLevel`;
			break;

		case 3:
			path = `/EduXplorer/Form/Confirmation`;
			break;

		default:
			break;
	}
	return path;
}

function getTitle(pageNumber) {
	let title = "Location";
	switch (pageNumber) {
		case 1:
			title = "Location";
			break;

		case 2:
			title = "School Level";
			break;

		case 3:
			title = "Confirmation";
			break;

		default:
			break;
	}
	return title;
}

function getInfoContents(pageNumber) {
	let infoContents = "Insert Info";
	switch (pageNumber) {
		case 1:
			infoContents = "INFO: Please select your province, region, city, and barangay to help us find schools near you.";
			break;

		case 2:
			infoContents = "INFO: Choose your current school level. If you're in college or senior high school, select your track and course to refine your search.";
			break;

		case 3:
			infoContents = "INFO: Please review the details you've entered. If everything is correct, click ‘NEXT’ to proceed.";
			break;

		default:
			break;
	}
	return infoContents;
}

export default FormTemplate;
