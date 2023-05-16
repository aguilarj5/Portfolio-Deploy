import React from 'react';

export default function Portfolio() {
	return (
		<>
			<div class="card bg-dark text-white">
				<a
					href="https://jjsmith32199.github.io/UntitledGooseProject/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require('./img/CinEvents_Watch_list.png')}
						class="card-img"
						alt="project"
					></img>
				</a>
				<div class="card-img-overlay">
					<h5 class="card-title">CinEvents</h5>
				</div>
			</div>
			<div class="card bg-dark text-white">
				<a
					href="https://autumn-bird-7789.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require('./img/proj2.PNG')}
						class="card-img"
						alt="project"
					></img>
				</a>
				<div class="card-img-overlay">
					<h5 class="card-title">BookEnds</h5>
				</div>
			</div>
			<div class="card bg-dark text-white">
				<a
					href="https://tech-tickets.herokuapp.com/#Signup"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require('./img/techtickets.JPG')}
						class="card-img"
						alt="project3"
					></img>
				</a>
				<div class="card-img-overlay">
					<h5 class="card-title">Tech Tickets</h5>
				</div>
			</div>
		</>
	);
}
