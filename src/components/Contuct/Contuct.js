import React from 'react';

const Contuct = () => {
	return (
		// here contact component here will be number and office address and email address
		<div style={{ height: '70vh' }}>
			<div>
				<h2>Contact Us:</h2>
				<h3 className="font-bold text-lg">Dignostic Center LTD</h3>
			</div>
			<br />
			<div>
				<p className="font-semibold">Main Unit:</p>
				<p className="text-lg">
					House #02, Road#06, Block#A, Section#10, Mirpur, Dhaka
				</p>
				<p>Phone: 9025283, 9023812, 01678-092703, 01856996664</p>
			</div>
			<br />
			<div>
				<p className="text-sm">PALLABI BRANCH:</p>
				<p className="font-thin text-xs">
					HOUSE # 61, ROAD # 4, BLOCK #B, PALLABI, MIRPUR-12, DHAKA
					PHONE: 01678 092715, 01856485315
				</p>
			</div>
			<br />
			<div>
				<p className="text-sm">RAMPURA BRANCH:</p>
				<p className="font-thin text-xs">
					OPPOSITE OF RAMPURA BTV BHABAN FOR DOCTOR SERIAL # 01856
					996665, 0185648531
				</p>
			</div>
			<br />
			<br />
			<p className="text-xs">
				email to Chairman: chairman_digilab@digilab.com.bd
			</p>
		</div>
	);
};

export default Contuct;
