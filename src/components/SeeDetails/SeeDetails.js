import React from 'react';
import { useParams } from 'react-router';
import service from './services.json';
import './SeeDetails.css';

const SeeDetails = () => {
	const { id } = useParams();
	const data = service.find((item) => item.id === parseInt(id));
	const { name, img, details, time, price } = data;

	return (
		<div className="container mx-auto">
			<div className="my-5">
				<img className="img mx-auto" src={img} alt="" />
			</div>
			<div className="my-5">
				<h3 className="font-bold text-2xl">{name}</h3>
				<p> {details} </p>
			</div>
			<div className="my-5">
				<p>
					<span className="font-bold text-xl ">Price: </span>
					{price}
				</p>
				<p>
					<span className="font-bold text-xl">Time: </span>
					{time}
				</p>
			</div>
		</div>
	);
};

export default SeeDetails;
