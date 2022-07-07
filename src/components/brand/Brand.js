import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';

import './Brand.css';

const Brand = () => {
	return (
		<div className="gpt3__brand section-padding">
			<div>
				<img src={google} alt="google" />
			</div>
			<div>
				<img src={slack} alt="slack" />
			</div>
			<div>
				<img src={atlassian} alt="atlassian" />
			</div>
			<div>
				<img src={dropbox} alt="dropbox" />
			</div>
			<div>
				<img src={shopify} alt="shopify" />
			</div>
		</div>
	);
};

export default Brand;
