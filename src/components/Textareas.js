import React,{useState} from "react";
import PropTypes from 'prop-types'

export default function Textareas(props) {


   const handleUpclick = ()=>{
        setText(text.toUpperCase())
    }
    const onHandleChanged=(event)=>{
        setText(event.target.value)
    }
    const handleLowclick=()=>{
        setText(text.toLowerCase())
    }
    const [text,setText]=useState('Enter Text To analysing')
  return (
    <>
     <div className="container">
     <div className="mb-3">
        <label className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={onHandleChanged}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleUpclick} >UpperCase</button>
      <button type="button" className="btn btn-success mx-3" onClick={handleLowclick} >Lower Case</button>
        <div className="container my-4">
            <h6>Total No of Words {text.length!==0? text.split(" ").length:0}</h6>
            <h6>Total No of characters {text.length!==0?text.length:0}</h6>
        </div>
     </div>
    </>
  );
}


Textareas.propsTypes={
    title: PropTypes.string
}
