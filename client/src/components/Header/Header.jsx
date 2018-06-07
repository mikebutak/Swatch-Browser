import React from 'react';
import classes from './Header.css';
import Logo from '../../assets/logo-symbol';

const header = () => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="http://www.clker.com/cliparts/Z/W/N/F/6/p/light-blue-square-md.png">
                    <Logo />
                </a>
            </div>
        </div>
    </nav>
)

export default header;