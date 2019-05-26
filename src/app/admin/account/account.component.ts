import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
	selector: 'app-account',
	template: '<router-outlet></router-outlet>',
	styles: []
})
export class AccountComponent implements OnInit {
	constructor(
		public admin: AdminService,
	) {}
	ngOnInit() {
		this.admin.title = 'Akun';
	}
}
