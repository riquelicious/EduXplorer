import "./styles/SchoolProfile.css";
import { RatingMedal, NamedContainer } from "../custom_components";

function SchoolProfile() {
  return (
    <div className="school-profile">
      <SchoolImage />
      <div className="school-profile-info">
        <SchoolHeader />
        <SchoolDescription
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          }
        />
        <SchoolCourses
          courses={[
            "BS in Computer Science",
            "BS in Information Technology",
            "BS in Computer Engineering",
            "BS in Electronics Engineering",
            "BS in Industrial Engineering",
            "BS in Mechanical Engineering",
            "BS in Electrical Engineering",
            "BS in Civil Engineering",
            "BS in Architecture",
            "BS in Chemical Engineering",
          ]}
        />
      </div>
    </div>
  );
}

const SchoolDescription = ({ description = null }) => {
  if (description == null) {
    return (
      <NamedContainer
        name={"School Description"}
        className="school-description-container"
      >
        <p className="school-description-blank">school description</p>
      </NamedContainer>
    );
  }
  return (
    <NamedContainer
      name={"School Description"}
      className="school-description-container"
    >
      <p className="school-description">{description}</p>
    </NamedContainer>
  );
};

const SchoolCourses = ({ courses = [] }) => {
  return (
    <NamedContainer name={"School Courses"} className="school-courses">
      <ul className="school-courses-list">
        {courses.map((course) => {
          return <li key={course}>{course}</li>;
        })}
      </ul>
    </NamedContainer>
  );
};
const SchoolImage = ({ src = null }) => {
  if (src == null) {
    return <div className="school-image" />;
  }
  return <img src={src} alt="" />;
};

const SchoolHeader = ({
  schoolName = "School Name",
  location = "Location",
  contact = "Contact",
  rating = "Unrated",
  schoolData = {},
}) => {
  return (
    <div className="school-info-header">
      <div className="school-main-info">
        <p className="school-name">{schoolName}</p>
        <p className="school-location">{location}</p>
        <p className="school-contact">{contact}</p>
      </div>
      <RatingMedal className="rate-container" rating={rating} />
    </div>
  );
};

export default SchoolProfile;
