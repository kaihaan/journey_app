import React from 'react'

const Button = (props) => {
    return (
        <button className="button button-primary" style={{marginTop: '10px'}} type={props.type} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button
