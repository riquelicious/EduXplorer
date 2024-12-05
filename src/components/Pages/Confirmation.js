import { NamedDiv } from "../custom_components";
import { useLocationContext } from "../../context/AppContext";
import "./styles/Confirmation.css";

function Confirmation() {
  const { region, province, city, barangay } = useLocationContext();
  const courses = "Courses/Tracks";

  return (
    <div className="main-container-confirmation">
      <div className="confirmation-container">
        <NamedDiv name="Region" className="confirmation-detail">
          <ul>
            <li className="confirmation-detail-item">{region?.region_name}</li>
          </ul>
        </NamedDiv>
        <NamedDiv name="Province" className="confirmation-detail">
          <ul>
            <li className="confirmation-detail-item">
              {province?.province_name}
            </li>
          </ul>
        </NamedDiv>
        <NamedDiv name="City" className="confirmation-detail">
          <ul>
            <li className="confirmation-detail-item">{city?.city_name}</li>
          </ul>
        </NamedDiv>
        <NamedDiv name="Barangay" className="confirmation-detail">
          <ul>
            <li className="confirmation-detail-item">{barangay?.brgy_name}</li>
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
