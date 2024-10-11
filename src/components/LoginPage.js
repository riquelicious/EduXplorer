import {TextBox, PassTextBox} from './custom_textbox';
import {Button} from './custom_button';
import './LoginPage.css'
import HomeIcon from '../assets/img/HomeIcon.png'


export function LoginPage() {
	return (
		<div className="LoginPage">
			<div className="header">
				<img className="HomeIcon" src={HomeIcon} alt="Home Icon"/>
				<TextBox className="email" boxName={"Email"}/>
				<PassTextBox className="password" boxName={"Password"}/>
				<a className="forgot-password">Forgot Password?</a>
				<Button className="login-button" buttonName={"Login"}/>
			</div>
			<div className="footer"></div>
		</div>
	);
}
