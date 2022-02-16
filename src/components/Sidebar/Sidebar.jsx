import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import sidebar_items from "../../helpers/Json/SidebarRoutes.json";

const SidebarItem = (props) => {
    const active = props.active ? "active" : "";

    return (
        <div className="sidebar-item">
            <div className={`sidebar-item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </div>
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="HongHai Official" />
            </div>
            <div className="sidebar-container">
                <Link to="/admin">
                    <div>Dashboard</div>
                </Link>
                <Link to="/blog-admin">
                    <div>Blog admin</div>
                </Link>
                <Link to="/project-admin">
                    <div>Project Admin</div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
