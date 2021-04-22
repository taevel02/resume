/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';

type IconProps = {
	href?: string;
	icon: string;
	className?: string;
};

const Icon: React.FC<IconProps> = ({ href, icon, className }) => {
	return (
		<a
			css={{
				width: '12px',
				fontSize: '12px',
				textAlign: 'center',
				textDecoration: 'none',
				color: '#eaeff9',
				// transition: 'color 0.35s ease-out',

				// '&:hover': {
				// 	color: '#111',
				// },
			}}
			href={href}
			target="_blank"
			rel="noreferrer"
		>
			<i className={`${icon} ${className}`} />
		</a>
	);
};

export default Icon;
