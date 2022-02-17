import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import sidebar_items from "../../helpers/Json/SidebarRoutes.json";
import "./Sidebar.scss";

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

const Sidebar = (props) => {
    const activeItem = sidebar_items.findIndex(
        (item) => item.route === props.location.pathname
    );
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="HongHai Official" />
            </div>
            {sidebar_items.map((item, index) => (
                <Link to={item.route} key={index}>
                    <SidebarItem
                        title={item.display_name}
                        icon={item.icon}
                        active={index === activeItem}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
