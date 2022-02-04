import React from "react";
import "./Reason.scss";
import Learning from "../../assets/images/learning495.png";
import Coding from "../../assets/images/coding495.png";
import Connect from "../../assets/images/connect495.png";
import Share from "../../assets/images/share495.png";
import LearningIcon from "../../assets/images/learningicon.png";
import CodingIcon from "../../assets/images/codingicon.png";
import ConnectIcon from "../../assets/images/connecticon.png";
import ShareIcon from "../../assets/images/shareicon.png";

function Reason() {
    var imageIndex = 0;
    imageSlider();

    function imageSlider() {
        var i;
        var images = document.getElementsByClassName("reason-img-detail");
        var items = document.getElementsByClassName("reason-box");

        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        imageIndex++;

        if (imageIndex > images.length) {
            imageIndex = 1;
        }

        for (i = 0; i < items.length; i++) {
            items[i].className = items[i].className.replace(" active", "");
        }

        for (i = 0; i < images.length; i++) {
            images[imageIndex - 1].style.display = "block";
            break;
        }

        for (i = 0; i < items.length; i++) {
            items[imageIndex - 1].className += " active";
            break;
        }

        setTimeout(imageSlider, 2000);
    }
    return (
        <div className="reason">
            <div className="reason-title">Why was this website born?</div>
            <div className="reason-row">
                <div className="reason-img">
                    <div className="reason-img-detail fade">
                        <img src={Learning} alt="Learning" />
                    </div>
                    <div className="reason-img-detail fade">
                        <img src={Coding} alt="Coding" />
                    </div>
                    <div className="reason-img-detail fade">
                        <img src={Connect} alt="Connect" />
                    </div>
                    <div className="reason-img-detail fade">
                        <img src={Share} alt="Share" />
                    </div>
                </div>

                <div className="reason-text">
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img src={LearningIcon} alt="Learning" />
                            <span>Expand my knowledge</span>
                        </h4>
                    </div>
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img src={CodingIcon} alt="Coding" />
                            <span>Practice coding skills</span>
                        </h4>
                    </div>
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img src={ConnectIcon} alt="Connect" />
                            <span>A place where you can connect with me</span>
                        </h4>
                    </div>
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img src={ShareIcon} alt="Share" />
                            <span>Share everything about me</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reason;
