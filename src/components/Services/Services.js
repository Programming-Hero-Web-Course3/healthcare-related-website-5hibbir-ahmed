import React from 'react';
import useDignosticData from '../../Hooks/useDignosticData';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
	const services = useDignosticData();

	return (
		<div className="container mx-auto my-5">
			<h2 className="font-bold text-xl">Our Services:</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5">
				{services.map((item) => (
					<ServiceCart service={item} key={item.id}></ServiceCart>
				))}
			</div>
		</div>
	);
};

export default Services;
