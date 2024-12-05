import "./custom_components.css";
import { useNavigate } from "react-router-dom";
import iBack from "../assets/img/backButton.svg";
import iMedal from "../assets/img/medal.svg";

export function TextBox(props) {
  if (props.boxName == null) {
    props.boxName = "boxName";
  }
  return (
    <div className={`default-container container-color  ${props.className}`}>
      <input
        minLength={props.minLength}
        type={props.type}
        onChange={props.onChange}
        className="default-box"
        autoComplete={props.autoComplete}
        required={props.required}
      />
      <p className="name">{props.boxName}</p>
    </div>
  );
}

export function DropDown(props) {
  if (props.name == null) {
    props.name = "dropDownName";
  }
  return (
    <div
      className={`default-container drop-down ${
        props.disabled ? "container-color-disabled" : "container-color"
      } ${props.className} `}
    >
      <select
        placeholder={"..."}
        className="default-box custom-select"
        disabled={props.disabled}
        onChange={props.onChange}
      >
        <option value="">...</option>
        {props.children}
      </select>
      <p className="name">{props.name}</p>
    </div>
  );
}

export function Button({
  buttonName,
  className = "",
  onClick = () => {},
  type = "button",
  disabled,
}) {
  if (buttonName == null) {
    buttonName = "buttonName";
  }
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <p className="button-name">{buttonName}</p>
    </button>
  );
}

export function RoundProgressBar({ pageCount, strokeDashoffset = 0 }) {
  return (
    <div className="progress-bar">
      <div className="outer-cir">
        <div className="inner-circle">
          <div id="page-number">{pageCount}</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="109px"
        height="109px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#04941A" />
            <stop offset="100%" stopColor="#0E5A5E" />
          </linearGradient>
        </defs>
        <circle
          cx="55"
          cy="55"
          r="47"
          transform="rotate(-90 55 55)"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function NamedDiv(props) {
  return (
    <div
      className={`default-container 
      ${props.disabled ? "container-color-disabled" : "container-color"}
    ${props.className}`}
    >
      <div className="default-box custom-div">{props.children}</div>
      <p className="name">{props.name}</p>
    </div>
  );
}

export function NamedContainer(props) {
  return (
    <div
      className={`default-container 
    ${props.disabled ? "container-color-disabled" : "container-color"}
    ${props.className}`}
    >
      <div className="named-container-box">{props.children}</div>
      <p className="name">{props.name}</p>
    </div>
  );
}

export function SearchBar(props) {
  return (
    <div className={`default-container ${props.className}`}>
      <input
        placeholder="..."
        className="default-box"
        type="search"
        name=""
        id=""
        onChange={props.onChange}
      />
    </div>
  );
}

export function ToggleButton(props) {
  return (
    <div className={`default-container toggle-button ${props.className}`}>
      <input id={`toggle-button-${props.unique_key}`} type="checkbox" />
      <label htmlFor={`toggle-button-${props.unique_key}`}>
        {props.children}
      </label>
    </div>
  );
}

export function BackButton() {
  let navigate = useNavigate();
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <img src={iBack} alt="Back Button" />
    </button>
  );
}
export function RatingMedal({ rating, className = "" }) {
  return (
    <div className={`medal-container ${className}`}>
      <img src={iMedal} alt="Rating Medal" />
      <p>{rating}</p>
    </div>
  );
}
