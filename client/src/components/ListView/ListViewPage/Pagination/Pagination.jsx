import React from 'react';
import './Pagination.css';

const listPagination = (props) => {
    return (
        <nav className="padding">
            <ul className="pagination" id="align">
                <li className="page-item"><a className="page-link" id="noBorder">1</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">2</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">3</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">4</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">5</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">6</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">7</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">8</a></li>
                <li className="page-item"><a className="page-link" id="noBorder">9</a></li>
            </ul>
        </nav>
    )
}

export default listPagination;