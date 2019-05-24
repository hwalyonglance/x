import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {
	constructor() { }
	open(type: 'delete' | 'error' | 'signOut', data: object = {}) {

	}
}
