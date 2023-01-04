import React from 'react';
import './Working.scss';

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
						<img
							src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/dce.png?alt=media&token=21d87ff9-49e8-474b-8f32-57a7013dc4aa`}
							alt="DCE"
							width="70%"
						/>
					</div>
					<div className="col-md-6 blog-image">
						<img
							src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/blog408.png?alt=media&token=28a961df-a4f6-4347-a264-12ca35c8f848`}
							alt="Blog writer"
							width="70%"
						/>
					</div>
					<div className="col-md-6">
						<p className="title-second">Writing Blog</p>
						<p className="content-second">
							I can write a blog about my knowledge, something
							that I maybe learn on the Internet
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
						<img
							src={`https://firebasestorage.googleapis.com/v0/b/anthonyhai.appspot.com/o/coding.png?alt=media&token=9f8ab285-e5fc-4747-a3e0-e919f3d22390`}
							alt="Coding"
							width="70%"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Working;
