import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Textareas(props) {
  let boldStyle, italicStyle, underlineStyle, Text_style,preview_style;
  const handleUpclick = () => {
    setText(text.toUpperCase());
    text.length===0?
    props.showAlert("Enter Text To Convert","danger"):
    props.showAlert("Converted To UpperCase","success")
  };
  const onHandleChanged = (event) => {
    setText(event.target.value);
  };
  const handleLowclick = () => {
    setText(text.toLowerCase());
    text.length===0?
    props.showAlert("Enter Text To Convert","danger"):
    props.showAlert("Converted To LowerCase","success")
  };
  const handleCapitalEachclick = () => {
    text.length===0?
    props.showAlert("Enter Text To Convert","danger"):
    props.showAlert("Converted To capitalize each word","success")
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
  const handleRemoveSpacesclick = () => {
    text.length===0?
    props.showAlert("Enter Text To Convert","danger"):
    props.showAlert("Remove Extra Spaces","success")
    let t = text.split(/[ ]+/);
    setText(t.join(" "));
  };
  const handleBoldTextclick = () => {
    bold ? setBold(false) : setBold(true);
  };
  const handleItalicTextclick = () => {
    italic ? setItalic(false) : setItalic(true);
  };

  const handleUnderlineTextclick = () => {
    underline ? setUnderline(false) : setUnderline(true);
  };

 
  const handleClearclick = () => {
    text.length>0?
    props.showAlert("Text Clear","success"):
    props.showAlert("Nothing to clear","danger")
    setText("");
  };

  //Here States are defined
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  


 


  //Bold Intalic Underline Button Style chnaged

  boldStyle = { backgroundColor: bold ? "Green" : "white" };
  underlineStyle = { backgroundColor: underline ? "teal" : "white" };
  italicStyle = { backgroundColor: italic ? "orange" : "white" };
  //TextStyle Define Here
  Text_style = {
    textAlign: "justify",
    backgroundColor: props.conclr,
    color: props.txtclr,
    fontWeight: bold ? "Bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "initial",
  };
  preview_style={
    textAlign: "justify",
    color: props.txtclr,
    // backgroundColor: theme==="Light" ? "#242521":"White",
    // color: theme==="Light" ? "white":"#242521",
    fontWeight: bold ? "Bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "initial",
  }
  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <label className="form-label" style={{color:`${props.txtclr}`,fontSize:'25px'}}>{props.title}</label>
          <br />

          <button
            type="button"
            className="btn mx-2"
            style={boldStyle}
            onClick={handleBoldTextclick}
          >
            <b> B</b>
          </button>

          <button
            type="button"
            className="btn mx-1"
            style={italicStyle}
            onClick={handleItalicTextclick}
          >
            <i>I</i>
          </button>

          <button
            type="button"
            className="btn mx-1"
            style={underlineStyle}
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
            style={Text_style}
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
          onClick={handleRemoveSpacesclick}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={handleClearclick}
        >
          Clear Text
        </button>

        <div className="container my-4">
          <h6 style={{color:`${props.txtclr}`}}>
            Total No of Words {text.length !== 0 ? text.split(" ").length : 0}
          </h6>
          <h6 style={{color:`${props.txtclr}`}}>
            Total No of characters{" "}
            {text.length !== 0 ? text.length - text.split(" ").length + 1 : 0}
          </h6>
        </div>
        <div className="container">
          <h4 style={{color:`${props.txtclr}`}}>Text Preview : </h4>
        </div>

        <div className="container" style={preview_style}>
          {text === "Enter Text To Edit" ? "" : text}
        </div>
      </div>
    </>
  );
}

Textareas.propsTypes = {
  title: PropTypes.string,
};
