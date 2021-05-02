/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import SubTitle from './utils/SubTitle';
import Icon from './utils/Icon';
import { IExperience } from '../utils/types';

const Section = styled('div')`
	display: flex;
	flex-direction: column;
	font-size: 12px;
	font-weight: 200;
	text-align: left;

	&:not(:last-child) {
		margin-bottom: 8px;
	}

	> span {
		line-height: 16px;
	}
`;

const LinkIcon = styled(Icon)`
	transition: color 0.35s ease-out;
	padding-right: 4px;
`;

type ExperienceProps = {
	experiences: IExperience[];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<div>
			<SubTitle>EXPERIENCE</SubTitle>
			{experiences.map(({ href, period, location, name, role, description }, idx) => (
				<Section key={`section-${idx.toFixed()}`}>
					<span>
						{period} / {location}
					</span>
					<span css={{ display: 'flex', fontSize: '14px' }}>
						{href !== undefined ? (
							<LinkIcon
								css={{
									'&:hover': {
										color: '#111',
									},
								}}
								href={href}
								icon="fas fa-link"
								fontSize="8px"
							/>
						) : (
							<LinkIcon css={{ color: '#666' }} icon="fab fa-slack-hash" fontSize="8px" />
						)}{' '}
						{name} / {role}
					</span>
					<span css={{ marginLeft: '12px', color: '#426fc9' }}>{description}</span>
				</Section>
			))}
		</div>
	);
};

export default Experience;
