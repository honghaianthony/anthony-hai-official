import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/logo.png?alt=media&token=f0a3264b-50ec-42c3-bea6-df69e673fed4"
                        }
                        alt="logo"
                        className="anthonyhai-logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                exact
                                className="nav-link"
                                aria-current="page"
                                to="/"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                                activeClassName="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/project"
                                activeClassName="active"
                            >
                                Project
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/blog"
                                activeClassName="active"
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
