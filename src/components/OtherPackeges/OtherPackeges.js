import React from 'react';
import {
	FaRegHospital,
	FaLungsVirus,
	MdAccessTime,
	GiStethoscope,
	BiDonateBlood,
	RiBodyScanLine,
} from 'react-icons/all';
const OtherPackeges = () => {
	return (
		<div className="container mx-auto text-white my-10 border-b-2 border-purple-900">
			<div>
				<h4 className="text-black font-bold text-2xl my-5">
					Our Facilities:
				</h4>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center  pb-5">
				<div className=" flex mx-auto justify-center items-center w-60 bg-purple-900 rounded-md h-24">
					<div className="text-3xl font-bold mr-4">
						<FaRegHospital />
					</div>
					<h4 className="font-bold text-xl">Hospital Services</h4>
				</div>
				<div className=" flex mx-auto justify-center items-center w-60 bg-purple-700 rounded-md h-24">
					<div className="text-3xl font-bold mr-4">
						<GiStethoscope />
					</div>
					<h4 className="font-bold text-xl">Find A Doctor</h4>
				</div>
				<div className=" flex mx-auto justify-center items-center w-60 bg-purple-900 rounded-md h-24">
					<div className="text-3xl font-bold mx-4">
						<FaLungsVirus />
					</div>
					<h4 className="font-bold text-xl">
						All virus Check Packages
					</h4>
				</div>
				<div className=" flex mx-auto justify-center items-center w-60 bg-purple-700 rounded-md h-24">
					<div className="text-4xl font-thin mx-4">
						<MdAccessTime />
					</div>
					<h4 className="font-bold text-xl">Cardiac Services</h4>
				</div>
				<div className=" flex mx-auto justify-center items-center w-60 bg-purple-900 rounded-md h-24">
					<div className="text-3xl font-bold mx-4">
						<BiDonateBlood />
					</div>
					<h4 className="font-bold text-xl"> Blood Bank Services</h4>
				</div>
				<div className=" flex mx-auto justify-center items-center w-60 bg-purple-700 rounded-md h-24">
					<div className="text-3xl font-bold mx-4">
						<RiBodyScanLine />
					</div>
					<h4 className="font-bold text-xl">
						Full Body Check Up Packages
					</h4>
				</div>
			</div>
		</div>
	);
};

export default OtherPackeges;
