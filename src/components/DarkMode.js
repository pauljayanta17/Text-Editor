import React from "react";
// thisismyweb
export default function DarkMode(props) {
  return (
    <div className="form-check form-switch" style={{ float: "right" }}>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        onChange={props.onChange}
        id="flexSwitchCheckDefault"
      />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckDefault"
        style={props.name === "Light" ? { color: "white" } : { color: "black" }}
      >
        {props.name}
      </label>
    </div>
  );
}
