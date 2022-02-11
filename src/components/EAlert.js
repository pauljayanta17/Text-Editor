import React from 'react'
// thisismyweb
export default function Alert(props) {
    const Capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.typ)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}
