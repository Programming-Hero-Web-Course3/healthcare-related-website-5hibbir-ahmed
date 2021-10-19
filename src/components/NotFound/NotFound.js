import React from 'react';

const NotFound = () => {
	return (
		<div className="not-found " style={{ height: '70vh' }}>
			{/* error message for wrong url */}
			<h1 className="text-3xl text-center mt-10">404, Sorry! 😢</h1>
			<h3 className="text-xl">Page Not Found</h3>
		</div>
	);
};

export default NotFound;
