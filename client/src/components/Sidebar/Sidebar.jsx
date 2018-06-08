import React from 'react';
import classes from './Sidebar.css';

const sidebar = (props) =>  {
    const btnStyle = {
        backgroundColor: '#ffffff',
        font: 'inherit',
        border: '1px solid #828585dd',
        padding: '2px',
        cursor: 'pointer',
        marginTop: '8px'
    }

    return (
        <nav className="col-sm-3 col-md-2 hidded-xs-down bg-light sidebar" id={classes.red}>
            <button type="button" style={btnStyle} className="btn btn-light">Random Color</button>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Red
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Orange
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Yellow
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Green
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Blue
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Purple
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Brown
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Grey
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default sidebar;