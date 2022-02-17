import React from "react";
import { Link } from "react-router-dom";
import "./AdminTopNav.scss";
import AdminProfile from "../AdminProfile/AdminProfile";

import AdminImage from "../../assets/images/avatar_about.png";

import AdminMenu from "../../helpers/Json/AdminMenu.json";

const curr_user = {
    display_name: "Hai Dang",
    image: AdminImage,
};

const renderUserToggle = (user) => (
    <div className="topnav-right-user">
        <div className="topnav-right-user-image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav-right-user-name">{user.display_name}</div>
    </div>
);

const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
);

const AdminTopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav-search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav-right">
                <div className="topnav-right-item">
                    {/* dropdown here */}
                    <AdminProfile
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={AdminMenu}
                        renderItems={(item, index) =>
                            renderUserMenu(item, index)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminTopNav;
