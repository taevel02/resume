/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';

type IconProps = {
	href?: string;
	icon: string;
	className?: string;
	fontSize: string;
};

const Icon: React.FC<IconProps> = ({ href, icon, className, fontSize }) => {
	return (
		<a
			css={{
				width: '100%',
				fontSize: `${fontSize}`,
				textAlign: 'center',
				textDecoration: 'none',
				color: '#426fc9',
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
