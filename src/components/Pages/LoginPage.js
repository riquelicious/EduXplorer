import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextBox, Button } from "../custom_components";
import "./styles/LoginPage.css";
import HomeIcon from "../../assets/img/HomeIcon.png";
import { Form, Link } from "react-router-dom";
import { useRequest } from "../../hooks/useFetch";
import { API_URLS, API_URL } from "../../config";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { data, error: fetchError, loading, fetchRequest } = useRequest();
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    fetchRequest(API_URL + API_URLS.LOGIN, "POST", payload);
  };

  useEffect(() => {
    if (fetchError) {
      setError(fetchError); // Display the error message
    }

    if (data?.success) {
      navigate("/EduXplorer/Form/Location");
    }
    // If backend returns an email already exists error, handle it
    if (data?.error) {
      setError(data?.error);
    }
  }, [data, fetchError, navigate]);

  const goToSignup = () => {
    navigate("/EduXplorer/Signup");
  };

  return (
    <div className="LoginPage">
      <Form onSubmit={handleSubmit} className="login-header">
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
        {/* <a className="forgot-password">Forgot Password?</a> */}
        <br />
        <Button
          type="submit"
          className="login-button"
          buttonName={loading ? "Loging in..." : "Login"}
        />
        <p onClick={goToSignup} className="goto-signup">
          Don't have an account?
        </p>
      </Form>
      {<p className="error-message">{error}</p>}
      <div className="footer"></div>
    </div>
  );
}

export default LoginPage;
