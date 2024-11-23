import "./custom_components.css";
import { useNavigate } from "react-router-dom";
import iBack from "../assets/img/backButton.svg";
import iMedal from "../assets/img/medal.svg";

export function TextBox({
  type = "text",
  boxName,
  className = "",
  autoComplete,
  required,
  onChange,
}) {
  if (boxName == null) {
    boxName = "boxName";
  }
  return (
    <div className={`default-container ${className}`}>
      <input
        type={type}
        onChange={onChange}
        className="default-box"
        autoComplete={autoComplete}
        required={required}
      />
      <p className="name">{boxName}</p>
    </div>
  );
}

export function DropDown({ name, className = "", items = [] }) {
  if (name == null) {
    name = "dropDownName";
  }
  return (
    <div className={`default-container drop-down ${className}`}>
      <select placeholder={"..."} className="default-box custom-select">
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
      <p className="name">{name}</p>
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

export function NamedDiv({ name, className = "", children }) {
  return (
    <div className={`default-container ${className}`}>
      <div className="default-box custom-div">{children}</div>
      <p className="name">{name}</p>
    </div>
  );
}

export function NamedContainer({ name, className = "", children }) {
  return (
    <div className={`default-container ${className}`}>
      <div className="named-container-box">{children}</div>
      <p className="name">{name}</p>
    </div>
  );
}

export function SearchBar({ className = "" }) {
  return (
    <div className={`default-container ${className}`}>
      <input
        placeholder="..."
        className="default-box"
        type="search"
        name=""
        id=""
      />
    </div>
  );
}

export function ToggleButton({
  className = "",
  unique_key = 0,
  labelContents = "Course: Insert Course",
}) {
  return (
    <div className={`default-container toggle-button ${className}`}>
      <input id={`toggle-button-${unique_key}`} type="checkbox" />
      <label htmlFor={`toggle-button-${unique_key}`}>{labelContents}</label>
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
