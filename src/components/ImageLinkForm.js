import React from 'react';
import './ImageLinkFoem.css';

const ImageLinkForm=({onInputChange,onSubmit})=>{
	return(
		<div>

		<p className="f3 center">{'This Magic Brain will detect your Face'}</p>
		<div className="center">
		<div className="pa4 br3 shadow-5 form">
		<input type="text" className="f4 pa2 w-70" onChange={onInputChange} />
		<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer"onClick={onSubmit}> Detect!</button>
		</div>
		</div>
		</div>
		


		);
}

export default ImageLinkForm;