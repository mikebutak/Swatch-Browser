import React from 'react';
import './FocalSwatch.css';

const focalSwatch = (props) => {
    const hue = {
        background: props.clr
    }

    return (
        <div className="card" id="focalCardStyles">
            <div className="card-img-top focalPic" style={hue}></div>
            <div className="card-body" id="focalCardBdy">
                <div className="focalLabel">{props.clr}</div>
            </div>
        </div>
    )
}

export default focalSwatch;