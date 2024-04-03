import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <div className="App-sidebar">
                <div className="header">
                    <h3 className="header-title">WeatherDash</h3>
                </div>
                <div className="menu">
                    <ul>
                        <li className="menu-item">
                            <Link className="menu-link" to="/">
                                <div>🏠  Dashboard</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='App-page'>
                <Outlet />
            </div>
        </div>
        
    )
};


export default Layout;