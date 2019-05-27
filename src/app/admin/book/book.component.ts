import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
	selector: 'app-book',
	template: `
		<h1 class="mat-h1">Buku</h1>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export class BookComponent implements OnInit {
	constructor(
		public admin: AdminService,
	) { }
	ngOnInit() {
		this.admin.title = 'Buku';
	}
}
