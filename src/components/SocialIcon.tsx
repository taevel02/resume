import * as React from 'react';
import styled from '@emotion/styled';

import openNewWindow from '../utils/openNewWindow';
import { ISocial } from '../utils/types';

const Section = styled('div')`
	display: flex;
`;

const CircleBox = styled('a')`
	display: grid;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: linear-gradient(145deg, #ffffff, #e5e5e5);
	box-shadow: 5px 5px 10px #b2b2b2, -5px -5px 10px #ffffff;
	cursor: pointer;

	&:active {
		background: linear-gradient(145deg, #e5e5e5, #ffffff);
	}

	&:not(:last-child) {
		margin-right: 8px;
	}
`;

const Icon = styled('img')`
	width: 20px;
	margin: auto;
	filter: drop-shadow(1px 1px 3px #e4e3e6);
`;

type SocialIconProps = {
	socials: ISocial[];
};

const SocialIcon: React.FC<SocialIconProps> = ({ socials }) => {
	return (
		<Section>
			{socials.map(({ href, text }) => (
				<CircleBox onClick={() => openNewWindow(href)}>
					<Icon src={`../../public/static/${text}.png`} alt={text} />
				</CircleBox>
			))}
		</Section>
	);
};

export default SocialIcon;
