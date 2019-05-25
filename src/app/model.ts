export interface Account {
	id: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	phone: string;
	photoURL: string;
	roles?: string[];
}

export interface Author {
	id: string;
	books?: Book[];
	name: string;
	phone: string;
}

export interface Book {
	id: string;
	authorId: string;
	author?: Author;
	cover: {
		back: string;
		front: string;
	};
	categoryIds: string[];
	categories?: Category[];
	description: string;
	price: number;
	publisherId: string;
	publisher?: Publisher;
	releaseYear: Date;
	stock: number;
	title: string;
}

export interface Category {
	id: string;
	name: string;
	description: string;
	books: Book[];
}

export interface Publisher {
	id: string;
	books?: Book[];
	description: string;
	name: string;
	address: string;
	phone: string;
}
