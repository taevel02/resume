export interface IInfo {
	title: string;
	subtitle: string;
	description: string;
}

export interface IContact {
	text: string;
	href: string;
}

export interface IExperience {
	period: string;
	location?: string;
	name: string;
	role: string;
	description?: string;
	href?: string;
}

export interface IAward {
	date: string;
	content: string;
	project?: string;
	host?: string;
}
