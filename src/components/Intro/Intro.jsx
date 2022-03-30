import React from "react";
import "./Intro.scss";

function Intro() {
    // const props = useSpring({
    //     opacity: 1,
    //     transform: "translate(0px, 0px)",
    //     from: { opacity: 0, transform: "translate(-20px, -20px)" },
    // });

    const myStyle = {
        wordBreak: "break-all",
    };

    return (
        <div className="intro-container">
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
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/avatar_about.png?alt=media&token=94f5e755-4fee-4582-b169-bd06798a9fa3`}
                                    alt="Avatar"
                                />
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
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/ioe.png?alt=media&token=98ae2cb9-a77b-40f5-8d0c-666fbe7aa1e9`}
                                    alt="Ioe Prize"
                                />
                            </div>
                            <div className="col-md-6 text-center">
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/class2.png?alt=media&token=d6a78e89-0480-41fe-94b1-bedb8326796a`}
                                    alt="My class"
                                />
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
                                <a
                                    href="https://www.facebook.com/100022060086787/videos/364070247671642"
                                    style={myStyle}
                                >
                                    https://www.facebook.com/100022060086787/videos/364070247671642
                                </a>
                                <br />
                                Or my Youtube Channel:
                                <a
                                    href="https://www.youtube.com/watch?v=z7iYKRVz6AE"
                                    style={myStyle}
                                >
                                    https://www.youtube.com/watch?v=z7iYKRVz6AE
                                </a>
                            </p>
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/dancehd.jpg?alt=media&token=7df0bc5b-3ade-4b09-988c-59700058e1ee`}
                                alt="Dancing"
                                className="dance-img"
                                width="1038px"
                                height="680px"
                            />
                            <div className="col-md-6 text-justify">
                                <p>
                                    At the end of grade 12, I was honored to be
                                    one of the students participating in the
                                    seminar on excellent students of Khanh Hoa
                                    province at Vinpearl Condotel Beachfont.
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/event.png?alt=media&token=f7c77284-4490-4788-bc13-d67d788e3827`}
                                    alt="Vinpearl Condotel Beachfont"
                                />
                            </div>
                            <p>
                                The 12th grade anniversary is the most memorable
                                when we have experienced many emotions, many
                                activities together and always remember each
                                other when talking about it.{" "}
                            </p>
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/IMG_534.jpg?alt=media&token=d6f85b84-d86b-427d-9da5-68876338b1cf`}
                                alt="Beach with my class"
                                className="class-image"
                            />
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/class2.jpg?alt=media&token=576f36ac-92e2-4b4d-8650-56a79cdcdc51`}
                                alt="My 12th Class"
                                className="class-image"
                                width="1038px"
                                height="680px"
                            />
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
                            <div className="col-md-6 text-center">
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/dce470.png?alt=media&token=7cbe137b-7bf4-4d86-ba93-cebcecce3d08`}
                                    alt="DCE 2021"
                                />
                                <p className="sub-name-project">
                                    Online Programming Course:{" "}
                                    <a href="https://dce2021.ml">dce2021.ml</a>
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img
                                    src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/reviewmovie470.png?alt=media&token=09dca217-8183-40da-8de0-66c33e7c62ff`}
                                    alt="Nghiện Review"
                                />
                                <p className="sub-name-project">
                                    Review Movie Web:{" "}
                                    <a href="https://review-movie-uit.herokuapp.com">
                                        review-movie-uit.herokuapp.com
                                    </a>
                                </p>
                            </div>
                            <img
                                src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/moneyplus.png?alt=media&token=3865130b-04c9-4c5d-8658-487b455082b9`}
                                alt="Clone Money Plus"
                                className="money-plus-img"
                                width="100px"
                                height="400px"
                            />
                            <p className="text-center sub-name-project">
                                Clone App Money Plus
                            </p>
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
