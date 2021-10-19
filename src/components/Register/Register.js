import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div style={{ height: '70vh' }}>
			<div className="register-form">
				<div className="my-4">
					<h2 className="font-bold">Create Account</h2>
					<form onSubmit="" action="">
						<input
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="text"
							name=""
							id=""
							placeholder="Your Name"
						/>
						<br />

						<input
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="email"
							name=""
							id=""
							placeholder="Your email"
						/>

						<br />
						<input
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="password"
							value=""
							placeholder="Password"
						/>
						<br />
						<input
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="password"
							value=""
							placeholder="Re Enter Password"
						/>
						<br />
						<input
							className="py-2 px-4 bg-purple-700 text-white rounded-md"
							type="submit"
							value="Submit"
						/>
					</form>
					<p>
						Already have an account?{' '}
						<Link className="text-red-600" to="/login">
							Login
						</Link>{' '}
					</p>
					<button className="bg-purple-600 py-2 px-4 text-white mt-4 rounded-md">
						You can also sign up with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
