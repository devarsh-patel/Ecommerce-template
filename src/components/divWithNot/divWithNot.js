import React, { useState } from 'react'

// import style
import './divWithNot.css';

const DivWithNot = ({ text, imageLink, notText, imageClass, size, color }) => {
    return (
        <div className="DivWithNot">
            <i className={imageClass} style={{color:color, fontSize:size}}></i>
            {text}
            <div className="DivWithNot-not">
                <span>{notText}</span>
            </div>            
        </div>
    )
}

export default DivWithNot;