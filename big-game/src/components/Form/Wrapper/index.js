import React from 'react';
import './style.css';



function Wrapper() {
	return (
		<div className="instructionsWrapper">
			<div className="wrapper-content">
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Click on an Image to start the game.</li>
					<li>Every time you click an image, the images get rearranged.</li>
					<li>If you pick the same image twice...You Lose!</li>
					<li>Click all 12 images without repeating...You Win!</li>
				</ol>
			</div>
			<br />
			<div className="wrapper-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsWrapper')[0].classList.add('hide');
				}}>Let's Play Already...</a>
			</div>	
		</div>
	)
}
export default Wrapper;