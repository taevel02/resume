/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import openNewWindow from '../../utils/openNewWindow';

type IconProps = {
	href?: string;
	icon: string;
	className?: string;
	fontSize: string;
};

const Icon: React.FC<IconProps> = ({ href, icon, className, fontSize }) => {
	return (
		<button
			css={{
				background: 'inherit',
				boxShadow: 'none',
				border: 0,
				borderRadius: 0,
				padding: 0,
				overflow: 'visible',
				fontSize: `${fontSize}`,
				textAlign: 'center',
				textDecoration: 'none',
				cursor: `${href ? 'pointer' : 'auto'}`,
				color: '#426fc9',
			}}
			onClick={() => openNewWindow(href)}
		>
			<i className={`${icon} ${className}`} />
		</button>
	);
};

export default Icon;
