import React from 'react';
import './Pagination.css';

const pagination = (props) => {
    return (
        <nav className="padding">
            <ul className="pagination" id="align" onClick={props.pageSelect}>
                <li className="page-item noBorder"><a className="page-link" id="1">1</a></li>
                <li className="page-item noBorder"><a className="page-link" id="2">2</a></li>
                <li className="page-item noBorder"><a className="page-link" id="3">3</a></li>
                <li className="page-item noBorder"><a className="page-link" id="4">4</a></li>
                <li className="page-item noBorder"><a className="page-link" id="5">5</a></li>
                <li className="page-item noBorder"><a className="page-link" id="6">6</a></li>
                <li className="page-item noBorder"><a className="page-link" id="7">7</a></li>
                <li className="page-item noBorder"><a className="page-link" id="8">8</a></li>
                <li className="page-item noBorder"><a className="page-link" id="9">9</a></li>
            </ul>
        </nav>
    )
}

export default pagination;