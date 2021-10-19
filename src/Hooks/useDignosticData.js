import { useEffect, useState } from 'react';

const useDignosticData = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch('./services.json')
			.then((response) => response.json())
			.then((data) => setServices(data));
	}, []);
	return services;
};
export default useDignosticData;
