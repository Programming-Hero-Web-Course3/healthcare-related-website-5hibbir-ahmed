import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
	const { signInUsingGoogle, createUser, setEmail, setPassword, setName } =
		useAuth();
	const location = useLocation();
	const history = useHistory();
	const url = location.state?.from || '/home';
	const signInUsingGoogleHandler = () => {
		signInUsingGoogle().then((result) => {
			history.push(url);
		});
	};

	const getName = (e) => {
		setName(e.target.value);
	};
	const getEmail = (e) => {
		setEmail(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};
	const registerForm = (e) => {
		e.preventDefault();
		createUser();
	};

	return (
		<div style={{ height: '70vh' }}>
			<div className="register-form">
				<div className="my-4">
					<h2 className="font-bold">Create Account</h2>
					<form onSubmit={registerForm} action="">
						<input
							onBlur={getName}
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="text"
							name=""
							id=""
							placeholder="Your Name"
						/>
						<br />

						<input
							onBlur={getEmail}
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="email"
							name=""
							id=""
							placeholder="Your email"
						/>

						<br />
						<input
							onBlur={getPassword}
							className="border-2 border-purple-500 px-3 rounded-md my-2"
							type="password"
							placeholder="Password"
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
					<button
						onClick={signInUsingGoogleHandler}
						className="bg-purple-600 py-2 px-4 text-white mt-4 rounded-md"
					>
						You can also sign up with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
