import * as React from 'react';
import styled from '@emotion/styled';

import SubTitle from './utils/SubTitle';
import { IInfo, ISocial } from '../utils/types';

const { title, subtitle, description }: IInfo = require('../data/info.json');

const Section = styled('div')`
	display: flex;
	flex-direction: column;
`;

const Title = styled('span')`
	display: block;
	margin-top: 80px;
	margin-bottom: 56px;
	font-size: 32px;
	font-weight: 700;
	line-height: 42px;
	color: #1c1c1c !important;
`;

const Description = styled('span')`
	display: block;
	font-size: 14px;
	font-weight: 200;
	line-height: 20px;
`;

const Socials = styled('div')`
	display: flex;
	flex-direction: row;
	margin-top: 20px;

	> a {
		color: #426fc9;
		font-size: 14px;
		text-decoration: none;

		&:not(:last-child) {
			margin-right: 20px;
		}
	}
`;

type HeaderProps = {
	socials: ISocial[];
};

const Header: React.FC<HeaderProps> = ({ socials }) => {
	return (
		<Section>
			<Title>{title}</Title>
			<SubTitle>{subtitle}</SubTitle>
			<Description>
				{description.split('\n').map((line, idx) => {
					return (
						<span key={`text-${idx.toFixed()}`}>
							{line}
							<br />
						</span>
					);
				})}
			</Description>
			<Socials>
				{socials.map(({ text, href }, idx) => (
					<a key={`text-${idx.toFixed()}`} href={href}>
						{text}
					</a>
				))}
			</Socials>
		</Section>
	);
};

export default Header;
