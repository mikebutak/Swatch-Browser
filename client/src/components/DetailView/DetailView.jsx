import React from 'react';
import './DetailView.css';
import Swatch from '../ListView/ListViewPage/Swatch/Swatch';
import FocalSwatch from './FocalSwatch/FocalSwatch';

const detailView = (props) => (
    <div className="full">
        <div className="row subhead">
        </div>
        <div className="row focal-row">
            <div className="detail-gutter"></div>
            <div className="focal-space">
                <FocalSwatch 
                    clr={props.focal}
                />
            </div>
            <div className="detail-gutter"></div>
        </div>
        <div className="row justify-content-between cards-row">
            <div className="detail-gutter"></div>
            <div className="row focal-space">
                    <div className="noPad">
                        <Swatch 
                            clr={props.shades[0]}
                        />
                    </div>
                    <div className="noPad">
                        <Swatch 
                            clr={props.shades[1]}
                        />
                    </div>
                    <div className="noPad">
                        <Swatch 
                            clr={props.shades[2]}
                        />
                    </div>
                    <div className="noPad">
                        <Swatch 
                            clr={props.shades[3]}
                        />
                    </div>
                    <div className="noPad">
                        <Swatch 
                            clr={props.shades[4]}
                        />
                    </div>
                </div>
            <div className="detail-gutter"></div>
        </div>
        <div className="row button-row justify-content-around">
            <button type="button" onClick={props.clear} className="btn btn-light btnStyle2">Clear</button>
        </div>

    </div>
)

export default detailView;