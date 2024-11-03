import { TextBox, Button } from "../custom_components";
// import { Button } from "../custom_button";
import "./styles/LoginPage.css";
import HomeIcon from "../../assets/img/HomeIcon.png";
import { Link } from "react-router-dom";

function LoginPage() {
	return (
		<div className="LoginPage">
			<div className="header">
				<img className="HomeIcon" src={HomeIcon} alt="Home Icon" />
				<TextBox className="email" boxName={"Email"} />
				<TextBox type="password" className="password" boxName={"Password"} />
				<a className="forgot-password">Forgot Password?</a>
				<Link to="/EduXplorer/Form/Location">
					<Button className="login-button" buttonName={"Login"} />
				</Link>
			</div>
			<div className="footer"></div>
		</div>
	);
}

export default LoginPage;
