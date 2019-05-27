import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
	selector: 'app-author',
	template: `
		<h1 class="mat-h1">Penulis</h1>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export class AuthorComponent implements OnInit {
	constructor(
		public admin: AdminService,
	) { }
	ngOnInit() {
		this.admin.title = 'Penulis';
	}
}
