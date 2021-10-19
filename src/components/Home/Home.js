import React from 'react';
import HomeService from '../HomeService/HomeService';
import OtherPackeges from '../OtherPackeges/OtherPackeges';
import Services from '../Services/Services';
import dignostic from './dignostic.jpg';
import './Home.css';

const Home = () => {
	return (
		// home component of this website
		<div className="mx-10">
			<div
				className="banner"
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${dignostic})`,
				}}
			>
				<p className="banner-title font-bold text-xl md:text-2xl lg:text-4xl text-purple-300">
					WE CARE YOUR HEALTH AND CHECKUP WITH BEST Technology
					Diagnostic Centre
				</p>
			</div>
			<div>
				<Services></Services>
				<OtherPackeges></OtherPackeges>
				<HomeService></HomeService>
			</div>
		</div>
	);
};

export default Home;
