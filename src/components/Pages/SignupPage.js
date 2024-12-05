import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextBox, Button } from "../custom_components";
import HomeIcon from "../../assets/img/HomeIcon.png";
import { Form, Link } from "react-router-dom";

import { useRequest } from "../../hooks/useFetch";
import "./styles/SignupPage.css";
import { API_URLS, API_URL } from "../../config";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { data, error: fetchError, loading, fetchRequest } = useRequest();
  const navigate = useNavigate();

  const toLogin = () => navigate("/EduXplorer");
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    const payload = {
      email,
      username,
      password,
      confirmPassword,
      account_type: "user",
    };
    fetchRequest(API_URL + API_URLS.SIGNUP, "POST", payload);
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

  return (
    <div className="SignupPage">
      <Form onSubmit={handleSubmit} className="header">
        <img className="SignupHomeIcon" src={HomeIcon} alt="Home Icon" />
        <TextBox
          type="email"
          className="email"
          boxName={"Email"}
          autoComplete="username"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextBox
          type="text"
          className="email"
          boxName={"Username"}
          autoComplete="username"
          minLength={5}
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextBox
          type="password"
          className="password"
          boxName={"Password"}
          autoComplete="current-password"
          minLength={8}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextBox
          type="password"
          className="password"
          boxName={"Confirm Password"}
          autoComplete="username"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {<p className="error-message">{error}</p>}
        <Button
          type="submit"
          className="signup-button"
          buttonName={loading ? "Signing Up..." : "Sign Up"}
          disabled={loading}
        />
        <p onClick={toLogin} className="already-have-account">
          Already Have an Account
        </p>
      </Form>
      <div class="footer"></div>
    </div>
  );
}

export default SignupPage;
