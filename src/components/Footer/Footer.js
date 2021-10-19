import React from 'react';

import { FaFacebookF, IoLogoTwitter, FaYoutube } from 'react-icons/all';

const Footer = () => {
	// here some information about this dignostic center in this footer component
	return (
		<div className="bg-purple-900 text-white text-left">
			<div className=" container mx-auto border-b-2 border-purple-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
				<div className="md:w-96 mx-auto ">
					<div className="font-bold text-xl px-5 my-5 ">
						Dignostic Center{' '}
					</div>
					<p className="px-5">
						To serve the humanity as a whole with this noble vision
						the Ibn Sina Trust started its journey in June 1980. The
						trust has agreed upon to provide health care service.
					</p>
					<p className="my-5 px-5">
						House # 48, Road # 9/A, Dhanmondi, Dhaka 1209
					</p>
				</div>

				{/* upcoming services */}
				<div className="mx-auto ">
					<div className="font-bold text-xl  my-5">
						Our Upcoming Services{' '}
					</div>
					<ul className="footer-links">
						<li className="footer-link">
							<a className="footer-link-item" href="#link">
								Mammography
							</a>
						</li>
						<li className="footer-link">
							<a className="footer-link-item" href="#link"></a>
						</li>
						<li className="footer-link">
							<a className="footer-link-item" href="#link">
								ECHO Color Doppler (Report with CD)
							</a>
						</li>
						<li className="footer-link">
							<a className="footer-link-item" href="#link">
								OPG, 10. Deltal X-ray
							</a>
						</li>
						<li className="footer-link">
							<a className="footer-link-item" href="#link">
								All types of Hormones
							</a>
						</li>
					</ul>
				</div>
				<div className="mr-10 flex flex-col">
					{/* contact information here */}
					<div className="font-bold text-xl my-5">Get In Touch</div>
					<ul className="footer-links">
						<li className="footer-link">
							Email:{' '}
							<a className="" href="mailto:techit@gmail.com">
								dignosticenter@gmail.com
							</a>
						</li>
						<li className="footer-link">
							Phone:{' '}
							<a className="footer-link-item" href="tel:+">
								01988-888822
							</a>
						</li>
						<li className="footer-link">Dhaka, Bangladesh</li>
					</ul>
					<div className="flex my-5 gap-5">
						<FaFacebookF className="hover:bg-red-600" />
						<IoLogoTwitter className="hover:bg-red-600" />
						<FaYoutube className="hover:bg-red-600" />
					</div>
				</div>
			</div>
			<div className="text-center p-2">
				<p className="font-thin text-xs">
					Copyright © 2021 Dignostic Center Ltd. Developed by
					Information Technology Department , Dignostic Center.
				</p>
			</div>
		</div>
	);
};

export default Footer;
