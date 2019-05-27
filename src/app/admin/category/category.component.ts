import {
	Component,
	OnInit,
} from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
	selector: 'app-category',
	template: `
		<h1 class="mat-h1">Kategori</h1>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements  OnInit {
	constructor(
		public admin: AdminService,
	) {}
	ngOnInit() {
		this.admin.title = 'Kategori';
	}
}
