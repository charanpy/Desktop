import React from 'react';
import './box.css';
const FaceRecognition=({imageUrl,box})=>{
	return(
		<div className="center" style={{position:"relative"}}>
		
		<img src={imageUrl} id="inputImage" style={{marginBottom:"5px"}} alt="face"  width="200px" height="auto" />
		<div className="box" style={{top:box.top,right:box.right,left:box.left,bottom:box.bottom}}></div>
		</div>
		


		);
}

export default FaceRecognition;