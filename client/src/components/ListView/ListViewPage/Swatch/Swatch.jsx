import React from 'react';
import './Swatch.css';

const swatch = (props) => {
    const hue = {
        background: props.clr
    }

    return (
        <div className="card cardStyles" onClick={props.click}>
            <div className="card-img-top pic" id={props.clr} style={hue}></div>
            <div className="card-body" id="cardBdy">
                <div className="label" id={props.clr}>{props.clr}</div>
            </div>
        </div>
    )
}

export default swatch;