import React from "react";
import './ListViewPage.css';
import Swatch from './Swatch/Swatch';
const tinycolor = require('tinycolor2');

const listViewPage = (props) => {
    console.log('first color in colors array in ListView Page: ', props.colors[0].hex)
    let trialShades = tinycolor(props.colors[0]).monochromatic().map(t => t.toHexString());
    console.log('trialShades in monochrome: ', trialShades);

    return (
        <div className="container-fluid pad">
            <div className="row my-row split">
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[0].hex}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[1].hex}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[2].hex}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[3].hex}
                    />
                </div>
            </div>
            <div className="row my-row split">
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[4].hex}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[5].hex}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[6].hex}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[7].hex}
                    />
                </div>
            </div>
            <div className="row my-row split">
                <div className="col">
                    <Swatch 
                        clr={props.colors[8].hex}
                    />
                </div>
                <div className="col">
                    <Swatch 
                        clr={props.colors[9].hex}
                    />
                </div>
                <div className="col">
                    <Swatch 
                        clr={props.colors[10].hex}
                    />
                </div>
                <div className="col">
                    <Swatch 
                        clr={props.colors[11].hex}
                    />
                </div>
            </div>

        </div>
    )
}

export default listViewPage;