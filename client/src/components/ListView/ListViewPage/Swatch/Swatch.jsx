import React from 'react';
import './Swatch.css';
import Logo from '../../../../assets/logo-symbol';

const swatch = (props) => {
    const hue = {
        background: props.clr
    }

    return (
        <div className="card" id="cardStyles">
            <div className="card-img-top pic" style={hue}></div>
            {/* <a className="card-img-top pic" id="hue" href="http://www.helpfulhuman.com/">
                <Logo />
            </a> */}
            {/* <img className="card-img-top" src=".../100px180/" alt="swatch color..."/> */}
            {/* <div className="redOne"></div> */}
            <div className="card-body" id="cardBdy">
                <div className="label">{props.clr}</div>
                {/* <h5 className="card-title" >Card title</h5> */}
            </div>
        </div>
    )
}

export default swatch;