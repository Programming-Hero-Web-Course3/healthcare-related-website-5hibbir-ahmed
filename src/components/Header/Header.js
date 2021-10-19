import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { VscThreeBars } from 'react-icons/all';
import './Header.css';
const Header = () => {
	const { user, logOut } = useAuth();
	const [toggle, setToggle] = useState(false);
	const headerBar = () => {
		setToggle((toggle) => !toggle);
	};

	return (
		<nav className="bg-purple-900 text-white">
			<div className="container py-3 mx-auto flex items-center justify-between for-desktop">
				<div className="text-2xl font-bold ">Dignostic Center</div>
				<div className="flex items-center justify-between">
					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
						to="/home"
					>
						Home
					</Link>
					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600 ml-4"
						to="/about"
					>
						About
					</Link>
					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600 ml-4"
						to="/service"
					>
						Services
					</Link>

					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600 ml-4"
						to="/contact"
					>
						Contact
					</Link>
				</div>
				<div className="flex">
					{user.email && (
						<p className="mr-4 font-semibold py-1 px-1 rounded-md hover:bg-purple-600">
							{user.displayName}
						</p>
					)}

					<div>
						{user.email ? (
							<button
								className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
								onClick={logOut}
							>
								Logout
							</button>
						) : (
							<div>
								<Link
									className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
									to="/login"
								>
									Login
								</Link>
								<Link
									className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
									to="/register"
								>
									Register
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* for mobile */}
			<div className="container py-3 mx-auto flex items-center justify-between for-mobile">
				<div className="text-4xl font-bold ">Dignostic Center</div>
				<button className="btn ml-5 text-2xl" onClick={headerBar}>
					<VscThreeBars />
				</button>
				<div
					className={`mx-auto flex flex-col justify-center ${
						toggle ? 'show-option' : 'hide-option'
					}`}
				>
					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
						to="/home"
					>
						Home
					</Link>
					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600 ml-4"
						to="/about"
					>
						About
					</Link>
					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600 ml-4"
						to="/service"
					>
						Services
					</Link>

					<Link
						className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600 ml-4"
						to="/contact"
					>
						Contact
					</Link>

					{user.email && <p>{user.displayName}</p>}

					<div>
						{user.email ? (
							<button onClick={logOut}>Logout</button>
						) : (
							<div>
								<Link
									className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
									to="/login"
								>
									Login
								</Link>
								<Link
									className="font-semibold py-1 px-1 rounded-md hover:bg-purple-600"
									to="/register"
								>
									Register
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
