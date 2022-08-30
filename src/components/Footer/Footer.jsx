import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
function Footer() {
	return (
		<div className="footer">
			<div className="footer-up">
				<div className="footer-wrap-left">
					<div className="footer-link">
						<div className="footer-link-title">
							<FontAwesomeIcon
								icon={faLink}
								size="2x"
								color="#fff"
							/>
							<span> Link</span>
							<span className="animate-border mt-2 mb-6"></span>
						</div>
						<div className="footer-link-detail">
							<div className="footer-link-detail-link">
								<Link to="/">Home</Link>
							</div>
							<div className="footer-link-detail-link">
								<Link to="/about">About</Link>
							</div>
							<div className="footer-link-detail-link">
								<Link to="/project">Project</Link>
							</div>
							<div className="footer-link-detail-link">
								<Link to="/blog">Blog</Link>
							</div>
						</div>
					</div>
					<div className="footer-contact">
						<div className="footer-contact-title">
							<FontAwesomeIcon
								icon={faMapMarkedAlt}
								size="2x"
								color="#fff"
							/>
							<span> Contact</span>
							<span className="animate-border mt-2 mb-6"></span>
						</div>
						<div className="footer-contact-detail">
							<div className="footer-contact-detail-contact">
								<FontAwesomeIcon
									icon={faEnvelope}
									color="#fff"
								/>
								<a
									href="http://mail.google.com"
									target="_blank"
									rel="noreferrer"
								>
									anthonyhaidev@gmail.com
								</a>
							</div>
							<div className="footer-contact-detail-contact">
								<FontAwesomeIcon
									icon={faFacebook}
									color="#fff"
								/>
								<a
									href="http://facebook.com/dangngohonghai"
									target="_blank"
									rel="noreferrer"
								>
									Dang Ngo Hong Hai
								</a>
							</div>
							<div className="footer-contact-detail-contact">
								<FontAwesomeIcon
									icon={faInstagram}
									color="#fff"
								/>
								<a
									href="http://instagram.com/anthony.haidang"
									target="_blank"
									rel="noreferrer"
								>
									anthony.haidang
								</a>
							</div>
							<div className="footer-contact-detail-contact">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									color="#fff"
								/>
								<a
									href="http://maps.google.com"
									target="_blank"
									rel="noreferrer"
								>
									Nha Trang City, Khanh Hoa Province
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-wrap-right">
					<div className="footer-my-interests">
						<div className="footer-my-interests-title">
							<FontAwesomeIcon
								icon={faHeart}
								color="#fff"
								size="2x"
							/>
							<span> My interests</span>
							<span className="animate-border mt-2 mb-6"></span>
						</div>
						<div className="footer-my-interests-detail">
							<div className="footer-my-interests-detail-interest">
								<FontAwesomeIcon icon={faMusic} color="#fff" />
								<a
									href="https://www.youtube.com/watch?v=5qzmiSR41cY&list=PLz-RN_5tENm_WxttqUzciGItmAoHI-MjF"
									target="_blank"
									rel="noreferrer"
								>
									My list musics
								</a>
							</div>
							<div className="footer-my-interests-detail-interest">
								<FontAwesomeIcon icon={faFilm} color="#fff" />
								<a
									href="https://www.google.com/search?q=girl+from+nowhere&sxsrf=APq-WBsgGhuKgaywo_YZ7kXmRQj7JY3Q9g%3A1646881053199&source=hp&ei=HWkpYqqECrnA3LUPpqaywA8&iflsig=AHkkrS4AAAAAYil3LYCmkR4X5Bep2tfENdVnm2rfhpU3&gs_ssp=eJzj4tVP1zc0TDMvMq20zKkyYPQSTM8sylFIK8rPVcjLL89ILUoFALXpC0E&oq=girl+&gs_lcp=Cgdnd3Mtd2l6EAEYADIECC4QJzIECAAQQzIECAAQQzIICAAQgAQQsQMyBQgAEMsBMgQIABBDMggIABCABBCxAzIECAAQQzIICC4QgAQQsQMyCAguEIAEELEDOgQIIxAnOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BQgAEIAEOgsILhCABBCxAxCDAVAAWLwHYJIQaANwAHgBgAGRAogBjAeSAQUzLjMuMZgBAKABAQ&sclient=gws-wiz"
									target="_blank"
									rel="noreferrer"
								>
									My films
								</a>
							</div>
						</div>
					</div>
					<div className="footer-pages">
						<div className="footer-pages-title">
							<FontAwesomeIcon
								icon={faPager}
								color="#fff"
								size="2x"
							/>
							<span> Pages</span>
							<span className="animate-border mt-2 mb-6"></span>
						</div>
						<div className="footer-pages-detail">
							<div className="footer-page-detail-page">
								<a
									href="http://review-movie-uit.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									Review Movie
								</a>
							</div>
							<div className="footer-page-detail-page">
								<a
									href="https://dce2021.ml/"
									target="_blank"
									rel="noreferrer"
								>
									DCE
								</a>
							</div>
							<div className="footer-page-detail-page">
								<a
									href="http://vivihandmade.com/"
									target="_blank"
									rel="noreferrer"
								>
									Vivi Handmade
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-down">
				<div className="content-down-copyright">
					<span>Copyright belongs to Dang Ngo Hong Hai</span>
				</div>
				<div className="content-down-allrights">
					<p>
						&#169; {new Date().getFullYear()} All rights reserve
						<Link to="/login">d</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
