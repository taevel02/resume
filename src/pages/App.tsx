import * as React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Experience from '../components/Experience';

import SubTitle from '../components/utils/SubTitle';
import { ISocial, IExperience } from '../utils/types';

const socials: ISocial[] = require('../data/social.json');
const experiences: IExperience[] = require('../data/experience.json');

const Content = styled('div')`
	display: flex;
	flex-direction: column;
	max-width: 800px;
	margin: 0 auto;

	> :not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Skill = styled('div')`
	font-size: 12px;
	font-weight: 200;
	line-height: 14px;
`;

const Footer = styled('footer')`
	padding: 1em 0;
`;

const FooterText = styled('span')`
	font-size: 11px;
	font-weight: 100;
	text-rendering: optimizeLegibility;
	color: #666;
	line-height: 13px;
`;

const App: React.FC = () => {
	return (
		<Content>
			<Header socials={socials} />
			<Experience experiences={experiences} />
			<Skill>
				<SubTitle>Skills</SubTitle>
				<span>Javascript, Typescript, React, Vue.js, HTML, CSS(Sass)</span>
			</Skill>
			<Footer>
				<FooterText>BY. Taehoon</FooterText>
			</Footer>
		</Content>
	);
};

export default App;
