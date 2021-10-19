import React from 'react';
import { useForm } from 'react-hook-form';

const HomeService = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);
	return (
		<div className="my-10">
			<div>
				<p className="font-bold text-xl">
					Our Special Free Home Service Facility :
				</p>
				<h4 className="font-sans border-b-2 w-80  mx-auto border-purple-800">
					Covid-Test
				</h4>
			</div>

			<form
				className="flex flex-col justify-center items-center my-5"
				onSubmit={handleSubmit(onSubmit)}
			>
				{' '}
				<p>Your First Name:</p>
				<input
					className="border-2 border-purple-500 px-3 my-1 rounded-md"
					type="text"
					placeholder="First name"
					{...register('First name', {
						required: true,
						maxLength: 80,
					})}
				/>
				<p>Your Last Name:</p>
				<input
					className="border-2 border-purple-500 px-3 my-1 rounded-md"
					type="text"
					placeholder="Last name"
					{...register('Last name', {
						required: true,
						maxLength: 100,
					})}
				/>
				<p>Your Mobile Number:</p>
				<input
					className="border-2 border-purple-500 px-3 my-1 rounded-md"
					type="tel"
					placeholder="Mobile number"
					{...register('Mobile number', {
						required: true,
						minLength: 6,
						maxLength: 12,
					})}
				/>
				<p>Must be fillup Your Address</p>
				<textarea
					className="border-2 border-purple-500 px-5 my-1 rounded-md"
					placeholder="house-no /road no/village"
					{...register('Developer', { required: true })}
				/>
				<input
					className="py-2 px-4 bg-purple-700 text-white rounded-md"
					type="submit"
				/>
			</form>
		</div>
	);
};

export default HomeService;
