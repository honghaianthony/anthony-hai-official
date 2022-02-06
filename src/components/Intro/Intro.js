import React from "react";
import "./Intro.scss";
import Avatar from "../../assets/images/avatar_about.png";
import Ioe from "../../assets/images/ioe.png";
import ClassImg from "../../assets/images/class.png";
import Dance from "../../assets/images/dance.png";
import Event from "../../assets/images/event.png";
import BeachImg from "../../assets/images/beachImg.png";
import ClassImgSecond from "../../assets/images/classImg.png";
import DCE from "../../assets/images/dce470.png";
import ReviewMovie from "../../assets/images/reviewmovie470.png";
import MoneyPlus from "../../assets/images/moneyplus.png";
function Intro() {
    return (
        <div className="intro">
            <div className="border-intro">
                <div className="intro-title">
                    <h2>
                        <span>About</span>
                    </h2>
                </div>
                <div className="intro-self">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img src={Avatar} alt="Avatar" />
                            </div>
                            <div className="col-md-6 text-justify">
                                <p>
                                    I was born and raised in Khanh Hoa, Vietnam.
                                    I was just an ordinary person like everyone
                                    else, but I had a passion for computers
                                    since 6th grade. This passion motivated me
                                    to have a love for IT.
                                    <br /> <br />
                                    Started learning everything about coding
                                    when I graduated from 12th grade. Although
                                    it was late but I tried my best everytime.
                                    <br /> <br />
                                    My dream is to become a Web Developer so
                                    that I can satisfy my passion for
                                    Information Technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-title">
                    <h2>
                        <span>Event in my life</span>
                    </h2>
                </div>
                <div className="intro-event">
                    <div className="container">
                        <div className="row">
                            <p>
                                I started my journey when I was an elementary
                                student at Dien An 1 Primary School. This was
                                the first school as long as the first public
                                place where I met my first friends in my life.
                            </p>
                            <div className="col-md-6 text-justify">
                                <p>
                                    Next time, when I was a secodary student at
                                    Tran Nhan Tong Secondary School, I achieved
                                    some success in my education path,
                                    especially in English.
                                    <br /> <br /> During my secondary time,
                                    every year I won awards for Internet English
                                    contests (IOE). The highest prize I won is
                                    the provincial consolation prize.
                                    <br /> <br /> In 8th grade, I was in English
                                    team and won some certain awards.
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={Ioe} alt="Ioe Prize" />
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={ClassImg} alt="My class" />
                            </div>
                            <div className="col-md-6 text-justify">
                                <p>
                                    In high school, I studied at Hoang Hoa Tham
                                    High School. This time was the happiest
                                    moment in my life time. I met a lot of new
                                    friends.
                                    <br /> <br /> In high school, I didn't join
                                    any activities so I could focus on the
                                    university entrance exam.
                                </p>
                            </div>
                            <p>
                                In 12th grade, I participated in many
                                activities. The most impressive activities was
                                Flashmob with my classmate. We practiced for a
                                month to give the best performance of our
                                student life.
                                <br /> <br /> The link of this dance:
                                <a href="https://www.facebook.com/100022060086787/videos/364070247671642">
                                    https://www.facebook.com/100022060086787/videos/364070247671642
                                </a>
                                <br />
                                Or my Youtube Channel:
                                <a href="  https://www.youtube.com/watch?v=z7iYKRVz6AE">
                                    https://www.youtube.com/watch?v=z7iYKRVz6AE
                                </a>
                            </p>
                            <img src={Dance} alt="Dancing" />
                            <div className="col-md-6 text-justify">
                                <p>
                                    At the end of grade 12, I was honored to be
                                    one of the students participating in the
                                    seminar on excellent students of Khanh Hoa
                                    province at Vinpearl Condotel Beachfont.
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={Event} alt="Ioe Prize" />
                            </div>
                            <p>
                                The 12th grade anniversary is the most memorable
                                when we have experienced many emotions, many
                                activities together and always remember each
                                other when talking about it.{" "}
                            </p>
                            <img src={BeachImg} alt="Beach with my class" />
                            <img src={ClassImgSecond} alt="My 12th Class" />
                            <p>
                                After that, I took the National High School exam
                                and got into the University of Information
                                Technology and started a new journey when I
                                lived independently in dormitory with new
                                friends in Ho Chi Minh City. Here I understood
                                more about the life of students away from home
                                and had been living happily with friends in the
                                room every day.
                                <br /> <br /> At this school, I learned many
                                things about IT and together with my team over
                                the semesters have created amazing apps
                            </p>
                            <div className="col-md-6 text-justify">
                                <img src={DCE} alt="DCE 2021" />
                                <p>
                                    Online Programming Course:{" "}
                                    <a href="dce2021.vercel.app">
                                        dce2021.vercel.app
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-6 text-justify">
                                <img src={ReviewMovie} alt="Nghiện Review" />
                                <p>
                                    Review Movie Web:
                                    <a href="review-movie-uit.herokuapp.com">
                                        review-movie-uit.herokuapp.com
                                    </a>
                                </p>
                            </div>
                            <img src={MoneyPlus} alt="Clone Money Plus" />
                            <p className="text-center">Clone App Money Plus</p>
                            <br /> <br />
                            <p>
                                I have these projects on Project tab, you can
                                check it out for more information.
                            </p>
                            <p>
                                Through many events in my life, I seem to
                                realize many good things in life, not only in my
                                family but also the life, my friends around me
                                and my knowledge and coding ability as well. I
                                hope I will achieve my dream of becoming a
                                developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
