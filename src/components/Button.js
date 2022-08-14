import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

function Button({label, styleProps}) {
  return (
    <Link className='main-button-link' to='/'>
        <button style={styleProps} type="button" className="main-btn">{label}</button>
    </Link>
  )
}

export default Button