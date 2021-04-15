import * as React from 'react';
import SocialIcon from '../components/SocialIcon';

import { ISocial } from '../utils/types';

const socials: ISocial[] = require('../data/social.json');

const App: React.FC = () => {
	return (
		<div>
			<SocialIcon socials={socials} />
		</div>
	);
};

export default App;
