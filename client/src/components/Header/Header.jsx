import React from 'react';
import Logo from '../../assets/logo-symbol';
import './Header.css';

const header = () => (
    <nav className="navbar navbar-dark bg-dark height">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="http://www.helpfulhuman.com/">
                    <Logo />
                </a>
            </div>
        </div>
    </nav>
)

export default header;