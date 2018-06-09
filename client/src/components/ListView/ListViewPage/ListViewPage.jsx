import React from "react";
import './ListViewPage.css';
import Swatch from './Swatch/Swatch';
const tinycolor = require('tinycolor2');

const listViewPage = (props) => {

    return (
        <div className="container-fluid pad">
            <div className="row my-row split">
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[0].hex}
                        click={props.click}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[1].hex}
                        click={props.click}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[2].hex}
                        click={props.click}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[3].hex}
                        click={props.click}
                    />
                </div>
            </div>
            <div className="row my-row split">
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[4].hex}
                        click={props.click}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[5].hex}
                        click={props.click}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[6].hex}
                        click={props.click}
                    />
                </div>
                <div className="col col-pad">
                    <Swatch 
                        clr={props.colors[7].hex}
                        click={props.click}
                    />
                </div>
            </div>
            <div className="row my-row split">
                <div className="col">
                    <Swatch 
                        clr={props.colors[8].hex}
                        click={props.click}
                    />
                </div>
                <div className="col">
                    <Swatch 
                        clr={props.colors[9].hex}
                        click={props.click}
                    />
                </div>
                <div className="col">
                    <Swatch 
                        clr={props.colors[10].hex}
                        click={props.click}
                    />
                </div>
                <div className="col">
                    <Swatch 
                        clr={props.colors[11].hex}
                        click={props.click}
                    />
                </div>
            </div>

        </div>
    )
}

export default listViewPage;