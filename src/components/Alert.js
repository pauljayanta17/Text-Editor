import React from "react";
// thisismyweb
export default function Alert(props) {
  return (
      props.alert &&
    <div className={`alert alert-${props.alert.typ}`} role="alert">
     <strong>{props.alert.msg}</strong> 
    </div>
  );
}
