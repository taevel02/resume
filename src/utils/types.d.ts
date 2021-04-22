export interface IInfo {
	title: string;
	subtitle: string;
	description: string;
}

export interface ISocial {
	text: string;
	href: string;
}

export interface IExperience {
	href?: string;
	period: string;
	location: string;
	name: string;
	role: string;
	description?: string;
}

export interface IProject {
	href?: string;
	project: string;
	period: string;
	description: string;
}
