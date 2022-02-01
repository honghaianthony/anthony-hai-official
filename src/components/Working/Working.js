import React from "react";
import { Link } from "react-router-dom";
import "./Working.scss";
import DCE from "../../assets/images/dce.png";
import blogService from "../../assets/images/blog.png";
import coding from "../../assets/images/coding.png";

function Working() {
    return (
        <div className="what-i-do">
            <div className="what-i-do-title">What can I do?</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="title-first">Software Programming</p>
                        <p className="content-first">
                            I can design, coding a website or making
                            <br /> a mobile app. I'm looking forward to becoming
                            <br />a professional web developer.
                        </p>
                    </div>
                    <div className="col-md-6 text-justify">
                        <img src={DCE} alt="" />
                    </div>
                    <div className="col-md-6 text-justify blog-image">
                        <img src={blogService} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p className="title-second">Writing Blog</p>
                        <p className="content-second">
                            I can write a blog about my knowledge, something
                            that I maybe learn
                            <br /> on the Internet
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className="title-third">Doing something I liked</p>
                        <p className="content-third">
                            I like doing something involve to my hobbies such as
                            coding, playing games or playing some instrumental
                            when I have free time.
                        </p>
                    </div>
                    <div className="col-md-6 text-justify">
                        <img src={coding} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Working;
