import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCart.css';

const ServiceCart = ({ service }) => {
	const { name, img, details, id } = service;

	const history = useHistory();
	const handleSeeDetails = () => {
		history.push(`/service/${id}`);
	};
	return (
		<div className="flex flex-col items-center text-center  bg-gray-100 rounded-md">
			<div>
				<img className="img" src={img} alt="" />
			</div>
			<div>
				<h3 className="font-bold text-xl"> {name} </h3>
				<p>{details.slice(0, 100)}....</p>

				<button
					onClick={handleSeeDetails}
					className="py-2 px-4 rounded-md border-2 border-purple-600 my-4"
				>
					see details
				</button>
			</div>
		</div>
	);
};

export default ServiceCart;
