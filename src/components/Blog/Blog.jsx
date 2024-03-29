import React, { useEffect, useState } from 'react';
import './Blog.scss';
import FeaturingBlog from './FeaturingBlog/FeaturingBlog';
import blogApis from '../../apis/blogApis';
import { motion } from 'framer-motion';

function Blog() {
	const variantsRight = {
		initial: {
			opacity: 0,
			x: 200,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.7,
			},
		},
	};
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		async function asyncProject() {
			const res = await blogApis.getAllBlogs();
			setBlogs(res);
		}
		asyncProject();
	}, []);

	let firstItem = 0;

	const idArray = blogs.map((item, index) => {
		return index;
	});

	idArray.splice(0, 1);

	const anotherBlog = () => {
		return idArray.map((item, index) => {
			// let path = "/blog/" + item.id;
			return (
				<FeaturingBlog
					key={blogs[item]._id}
					blogId={blogs[item]._id}
					src={blogs[item].coverImage}
					title={blogs[item].title}
					author={`${blogs[item].user.firstName} ${blogs[item].user.lastName}`}
					time={new Date(blogs[item].updatedAt).toLocaleDateString()}
					// path={path}
					description={blogs[item].description}
				/>
			);
		});
	};
	// const props = useSpring({
	//     opacity: 1,
	//     transform: "translate(0px, 0px)",
	//     from: { opacity: 0, transform: "translate(-20px, 1000px)" },
	//     config: { tension: 220, friction: 120 },
	// });

	return (
		<motion.div
			className="blog-container"
			variants={variantsRight}
			initial="initial"
			animate="animate"
		>
			{blogs.length > 0 ? (
				<div className="blog-list">
					<div className="featuring-blog">
						<h4 className="featuring-blog-title">Featuring Blog</h4>
						<div className="featuring-blog-item">
							<FeaturingBlog
								blogId={blogs[firstItem]._id}
								src={blogs[firstItem].coverImage}
								title={blogs[firstItem].title}
								description={blogs[firstItem].description}
								author={`${blogs[firstItem].user.firstName} ${blogs[firstItem].user.lastName} `}
								time={new Date(
									blogs[firstItem].updatedAt
								).toLocaleDateString()}
								//view='134'
							/>
						</div>
					</div>
					{blogs.length > 1 && (
						<div className="another-blog">
							<h4 className="another-blog-title">
								Another Blogs
							</h4>
							<div className="another-blog-item">
								{anotherBlog()}
							</div>
						</div>
					)}
				</div>
			) : (
				<div className="loader"></div>
			)}
		</motion.div>
	);
}

export default Blog;
