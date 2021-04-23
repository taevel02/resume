/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

import Icon from './utils/Icon';
import { IExperience } from '../utils/types';

const Section = styled('div')`
	display: flex;
	margin: 6px 0;
	flex-direction: column;
	font-size: 12px;
	font-weight: 200;
	text-align: left;

	> span {
		line-height: 16px;
		padding: 0 0 6px 15px;
	}
`;

const LinkIcon = styled(Icon)`
	transition: color 0.35s ease-out;
`;

type ExperienceProps = {
	experiences: IExperience[];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<div>
			{experiences.map(({ href, period, location, name, role, description }) => (
				<Section>
					<span css={{ color: '#aaa' }}>
						{period} / {location}
					</span>
					<span css={{ fontSize: '14px' }}>
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
