export interface Account {
	id: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	phone: string;
	photoURL: string;
	roles?: string[];
}

export interface Category {
	id: string;
	name: string;
	description: string;
	product: number;
}
