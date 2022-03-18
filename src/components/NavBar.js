import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import "../App.css";

const NavBar = () => {
	const [screen, setScreen] = useState(window.matchMedia("(min-width: 768px)").matches)
	const [clicked, setClicked] = useState(false)
	useEffect(() => {
		window
		.matchMedia("(min-width: 700px)")
		.addEventListener('change', e => setScreen( e.matches ));
	}, [])
	
	const click = (e) =>{
		if(clicked===true)setClicked(false);
		else setClicked(true);
	}
  return (
	<div className="navbar">
		<div className="navbar__left btn__cursor">
			<img src="nyusta.jpeg" />
		</div>
		{(screen||clicked) &&<div className="navbar__right">
			<div className="btn__cursor">Home</div>
			<div className="btn__cursor">Company</div>
			<div className="btn__cursor">Team</div>
			<div className="btn__cursor">About</div>
			<div className="btn">Join Now</div>
		</div>}
		{!screen && <div className="small" onClick={click}>
			<img src="menu.svg" />
		</div>}
	</div>
  )
}

export default NavBar