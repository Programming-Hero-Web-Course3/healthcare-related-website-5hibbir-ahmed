import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
	const { signInUsingGoogle, signUpUser, setEmail, setPassword } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const url = location.state?.from || '/home';
	const signInUsingGoogleHandler = () => {
		signInUsingGoogle().then((result) => {
			history.push(url);
		});
	};

	const getEmail = (e) => {
		setEmail(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};
	const loginForm = (e) => {
		e.preventDefault();
		signUpUser();
	};

	return (
		<div style={{ height: '70vh' }}>
			<div className="items-center">
				<div>
					<h4 className="font-bold my-5">Login</h4>
					<form onSubmit={loginForm} action="">
						<input
							onBlur={getEmail}
							className="border-2 border-purple-500 px-3 rounded-md"
							type="email"
							name=""
							id=""
							placeholder="Your Email"
						/>
						<br />
						<input
							onBlur={getPassword}
							className="border-2 border-purple-500 px-3 my-2 rounded-md"
							type="password"
							placeholder="Your Password"
						/>
						<br />
						<input
							className="py-2 px-4 bg-purple-700 text-white rounded-md"
							type="submit"
							value="submit"
						/>
					</form>
				</div>
				<div>
					<p className="my-5">
						New In Dignostic Center?
						<Link className="text-red-600" to="/register">
							Create Account
						</Link>
					</p>
				</div>
				<div>
					<button
						onClick={signInUsingGoogleHandler}
						className="bg-purple-700 py-2 px-4 text-white mt-4 rounded-md"
					>
						You can also sign up with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
