import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textareas(props) {
  const handleUpclick = () => {
    setText(text.toUpperCase());
  };
  const onHandleChanged = (event) => {
    setText(event.target.value);
  };
  const handleLowclick = () => {
    setText(text.toLowerCase());
  };
  const handleCapitalEachclick = () => {
    var temp = text.toLowerCase();
    var words = temp.split(" ");
    var capital_eachWord = [];
    words.forEach((element) => {
      capital_eachWord.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    setText(capital_eachWord.join(" "));
  };
  const handleToggleclick = () => {
    var temp = text.toUpperCase();
    var words = temp.split(" ");
    var capital_eachWord = [];
    words.forEach((element) => {
      capital_eachWord.push(
        element[0].toLowerCase() + element.slice(1, element.length)
      );
    });
    setText(capital_eachWord.join(" "));
  };
  const handleBoldTextclick = () => {
    bold ? setBold(false) : setBold(true);
    console.log(bold);
    // setText(text.style.fontWeight.bold)
  };
  const handleItalicTextclick = () => {
    italic ? setItalic(false) : setItalic(true);
    console.log(italic);
  };

  const handleUnderlineTextclick = () => {
    underline ? setUnderline(false) : setUnderline(true);
  };
  const handleClearclick = () => {
    setText("");
  };

  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <label className="form-label">{props.title}</label>
          <br />
          <button
            type="button"
            className="btn mx-2"
            style={{ backgroundColor: bold ? "Green" : "gray" }}
            onClick={handleBoldTextclick}
          >
            <b> B</b>
          </button>

          <button
            type="button"
            className="btn mx-1"
            style={{ backgroundColor: italic ? "orange" : "gray" }}
            onClick={handleItalicTextclick}
          >
            <i>I</i>
          </button>
          <button
            type="button"
            className="btn mx-1"
            style={{ backgroundColor: underline ? "teal" : "gray" }}
            onClick={handleUnderlineTextclick}
          >
            <u>U</u>
          </button>
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            placeholder="Enter Text To Edit"
            style={{
              textAlign: "justify",
              fontWeight: bold ? "Bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
              textDecoration: underline ? "underline" : "initial",
            }}
            onChange={onHandleChanged}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpclick}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleLowclick}
        >
          Lower Case
        </button>
        <button
          type="button"
          className="btn btn-info mx-1"
          onClick={handleCapitalEachclick}
        >
          Capitalize Each Letter
        </button>
        <button
          type="button"
          className="btn btn-warning mx-1"
          onClick={handleToggleclick}
        >
          Toggle Case
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={handleClearclick}
        >
          Clear Text
        </button>

        <div className="container my-4">
          <h6>
            Total No of Words {text.length !== 0 ? text.split(" ").length : 0}
          </h6>
          <h6>
            Total No of characters{" "}
            {text.length !== 0 ? text.length - text.split(" ").length +1: 0}
          </h6>
        </div>
        <div className="container">
          <h4>Text Preview : </h4>
        </div>

        <div
          className="container"
          style={{
            textAlign: "justify",
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            textDecoration: underline ? "underline" : "initial",
          }}
        >
          {text === "Enter Text To Edit" ? "" : text}
        </div>
      </div>
    </>
  );
}

Textareas.propsTypes = {
  title: PropTypes.string,
};
