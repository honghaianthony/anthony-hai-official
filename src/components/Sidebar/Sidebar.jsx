import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import sidebar_items from "../../helpers/Json/SidebarRoutes.json";
import "./Sidebar.scss";

// const SidebarItem = (props) => {
//     const active = props.active ? "active" : "";

//     return (
//         <div className="sidebar-item">
//             <div className={`sidebar-item-inner ${active}`}>
//                 <i className={props.icon}></i>
//                 <span>{props.title}</span>
//             </div>
//         </div>
//     );
// };

function Sidebar() {
    // const activeItem = sidebar_items.findIndex(
    //     (item) => item.route === props.location.pathname
    // );
    // const active = props.active ? "active" : "";

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="HongHai Official" />
            </div>

            <div className="sidebar-item">
                <NavLink
                    to="/admin"
                    activeClassName="active"
                    exact={true}
                    className="sidebar-item-inner"
                >
                    <i className="bx bx-category-alt"></i>
                    <span>Dashboard</span>{" "}
                </NavLink>
            </div>

            <NavLink to="/blog-admin" activeClassName="active">
                <div className="sidebar-item">
                    <NavLink
                        to="/blog-admin"
                        activeClassName="active"
                        exact={true}
                        className="sidebar-item-inner"
                    >
                        <i className="bx bxl-blogger"></i>
                        <span>Blog Admin</span>{" "}
                    </NavLink>
                </div>
            </NavLink>
            <NavLink to="/project-admin" activeClassName="active">
                <div className="sidebar-item">
                    <NavLink
                        to="/project-admin"
                        activeClassName="active"
                        exact={true}
                        className="sidebar-item-inner"
                    >
                        <i className="bx bx-package"></i>
                        <span>Project Admin</span>{" "}
                    </NavLink>
                </div>
            </NavLink>
        </div>
    );
}

export default Sidebar;
