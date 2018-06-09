import React from 'react';
import Logo from '../../assets/logo-symbol';
import './Header.css';

const header = () => (
    <nav className="navbar navbar-dark bg-dark height">
        <div className="container-fluid">
            <div className="navbar-header nav-wide">
                <div className="row justify-content-end">
                    <div className="col">
                        <a className="navbar-brand" href="http://www.helpfulhuman.com/">
                            <Logo />
                        </a>
                    </div>
                    <div className="col search-style">
                        <form>
                            <div className="form-group form-adj">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default header;