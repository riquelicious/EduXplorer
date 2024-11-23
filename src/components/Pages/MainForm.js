import { Outlet } from "react-router-dom";
import FormTemplate from "./FormTemplate";

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
