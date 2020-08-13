import React, { Component } from 'react';
import Sky from 'react-sky';
import Typist from 'react-typist'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import logoblue from '../assets/logoblue.png'
import logopink from '../assets/logopink.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import myself from '../assets/myself.png'

const Home = () => (
	<>
		<div id = 'content'>
			<div id = 'links-name'>
				<nav>
					<ul>
						<a href = "https://www.github.com/differentsyntax" target="_blank">
							<img src={github}/>
						</a>
						<a href = "https://www.linkedin.com/in/mridulawasthi" target="_blank">
							<img src={linkedin}/>
						</a>
						<a href = "https://www.facebook.com/lucknowsehoon" target="_blank">
							<img src={facebook}/>
						</a>
						<a href = "https://www.instagram.com/lucknowsehoon" target="_blank">
							<img src={instagram}/>
						</a>
						{/* <button>
							<Link to="/experience">Experience</Link>
						</button>
						<button>
							<Link to="/projects">Projects</Link>
						</button>
						<button>
							<Link to="/dragonhacks">DragonHacks</Link>
						</button>
						<button>
							<Link to="/really">Really Though</Link>
						</button> */}
					</ul>
				</nav>
				<div className = "my-name">
					<Typist avgTypingSpeed={15000} startDelay={500}>
						<a href="/" >Mridul Awasthi</a>
					</Typist>
				</div>
			</div>
			<div id = 'display-pic'>
				<img src={myself}/>
			</div>
		</div>
		<Sky
			images={{
				/* FORMAT AS FOLLOWS */
				0: logopink,  /* You can pass as many images as you want */
				1: logoblue
			}}
			how={20} /* Pass the number of images Sky will render chosing randomly */
			time={15} /* time of animation */
			size={'200px'} /* size of the rendered images */
			background={'#4A4063'} /* color of background */
		/>
	</>
)

export default Home