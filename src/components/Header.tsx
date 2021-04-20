import * as React from 'react';
import styled from '@emotion/styled';
import { IInfo } from '../utils/types';

const { title, subtitle, description }: IInfo = require('../data/info.json');

const Section = styled('div')`
	display: flex;
	flex-direction: column;
`;

const Title = styled('span')`
	display: block;
	margin-bottom: 56px;
	font-size: 32px;
	font-weight: 400;
	line-height: 42px;
	color: #1c1c1c !important;
`;

const Subtitle = styled('span')`
	display: block;
	padding-bottom: 4px;
	font-size: 13px;
	font-weight: 700;
	line-height: 24px;
	color: #111;
	text-transform: uppercase;
`;

const Description = styled('span')`
	display: block;
	font-size: 14px;
	font-weight: 200;
	line-height: 20px;
`;

const Header: React.FC = () => {
	return (
		<Section>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Description>{description}</Description>
		</Section>
	);
};

export default Header;
