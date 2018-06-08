import React from 'react';
import './Sidebar.css';

const sidebar = (props) =>  {

    return (
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-light sidebar reach">
            <button type="button" className="btn btn-light" id="btnStyle">Random Color</button>
            <ul className="nav flex-column">
                <li className="nav-item" >
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