import React from 'react';
import "./Logo.css";
import Tilt from 'react-tilt';
import icon from './icon.png'
const Logo=()=>{
	return(
		<div className="logo mt0">
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
		<div className="Tilt-inner pa3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <img src={icon} style={{height:"80px",width:"80px",paddingTop:"6px"}} /> </div>
		</Tilt>
		</div>


		);
	}

	export default Logo;