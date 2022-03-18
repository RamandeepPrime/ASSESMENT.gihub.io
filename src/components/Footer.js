import React from 'react'
import "./Footer.css"
import "../App.css"
import Twitter from '../icons/Twitter'
import Dropdown from '../icons/Dropdown';
import Facebook from "../icons/Facebook";
import Insta from "../icons/Insta";

const Footer = () => {
	return (
		// < className="footer__container">

		<div className="footer">

			<div className="footer__left__container">
				<div className="footer__left__above">
					<div className="box active"></div>
					<div className="box"></div>
					<div className="box"></div>
					<div className="box"></div>
				</div>
				<div className="footer__left">
					<div className="active__page pages">1</div>
					<div className="pages">2</div>
					<div className="pages">3</div>
					<div className="pages">4</div>
				</div>
			</div>


			<div className="footer__center">
				<div className="btn">Join Now</div>
				<Dropdown />
			</div>
			<div className="footer__right">
				<div className="circle">
					<Facebook />
				</div>
				<div className="circle">
					<Twitter />
				</div>
				<div className="circle">
					<Insta />
				</div>
			</div>

		</div>

	)
}

export default Footer