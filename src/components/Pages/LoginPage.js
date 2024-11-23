import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextBox, Button } from "../custom_components";
import "./styles/LoginPage.css";
import HomeIcon from "../../assets/img/HomeIcon.png";
import { Form, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    navigate("/EduXplorer/Form/Location");
  };

  return (
    <div className="LoginPage">
      <Form onSubmit={handleSubmit} className="header">
        <img className="HomeIcon" src={HomeIcon} alt="Home Icon" />
        <TextBox
          type="email"
          className="email"
          boxName={"Email"}
          autoComplete="username"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextBox
          type="password"
          className="password"
          boxName={"Password"}
          autoComplete="current-password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className="forgot-password">Forgot Password?</a>
        <Button type="submit" className="login-button" buttonName={"Login"} />
      </Form>
      {<p className="error-message">{error}</p>}
      <div className="footer"></div>
    </div>
  );
}

export default LoginPage;
