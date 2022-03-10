import React from "react";
import "./Reason.scss";

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
                        <img
                            src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/learning495.png?alt=media&token=72f97c34-fd07-4603-92c9-d0c7743bc46f`}
                            alt="Learning"
                        />
                    </div>
                    <div className="reason-img-detail fade">
                        <img
                            src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/coding495.png?alt=media&token=24b86952-5438-4aec-aef2-9f545609c32d`}
                            alt="Coding"
                        />
                    </div>
                    <div className="reason-img-detail fade">
                        <img
                            src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/connect495.png?alt=media&token=16d6fca3-19a8-45f5-843c-7e1b96e9dddd`}
                            alt="Connect"
                        />
                    </div>
                    <div className="reason-img-detail fade">
                        <img
                            src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/share495.png?alt=media&token=a22e5afc-19e0-4dc4-b986-7ef612dec67a`}
                            alt="Share"
                        />
                    </div>
                </div>

                <div className="reason-text">
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/learningicon.png?alt=media&token=aeb9cedf-4749-4c37-97e1-a1282379f8be`}
                                alt="Learning"
                            />
                            <span>Expand my knowledge</span>
                        </h4>
                    </div>
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/codingicon.png?alt=media&token=242252aa-f533-45a1-9ea2-e7a8f6d7c5c8`}
                                alt="Coding"
                            />
                            <span>Practice coding skills</span>
                        </h4>
                    </div>
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/connecticon.png?alt=media&token=94a4ef78-70e4-408b-93ce-2303b2ac1e1f`}
                                alt="Connect"
                            />
                            <span>A place where you can connect with me</span>
                        </h4>
                    </div>
                    <div className="reason-text-detail">
                        <h4 className="reason-box">
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/shareicon.png?alt=media&token=7ed8708d-6e54-4232-b9be-75a8db60176b`}
                                alt="Share"
                            />
                            <span>Share everything about me</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reason;
