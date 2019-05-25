import { EventEmitter } from '@angular/core';

export interface SharedDialog {
	accept: EventEmitter<any>;
	cancel: EventEmitter<any>;
	error?: any;
	title?: string;
	text?: string;
	cancelBtnText?: string;
	acceptBtnText?: string;
}

export interface Account {
	id: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	phone: string;
	photoURL: string;
	roles?: string[];
}

export interface Book {
	id: string;
	author: string;
	cover: {
		back: string;
		front: string;
	};
	categoryIds: string;
	categories?: Category[];
	description: string;
	price: number;
	publisherId: string;
	publisher: Publisher;
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
	name: string;
	description: string;
}
