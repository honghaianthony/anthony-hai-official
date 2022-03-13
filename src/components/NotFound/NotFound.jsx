import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFoundPage() {
    return (
        <div className="not-found">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/404.png?alt=media&token=fabe3f5f-c162-4e34-9168-436148c6c4e9"
                alt="not-found"
            />
            <Link to="/" className="link-home">
                Go Home
            </Link>
        </div>
    );
}

export default NotFoundPage;
