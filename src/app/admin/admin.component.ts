import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AdminService } from './admin.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
				{ title: 'Card 1', cols: 1, rows: 1 },
				{ title: 'Card 2', cols: 1, rows: 1 },
				{ title: 'Card 3', cols: 1, rows: 1 },
				{ title: 'Card 4', cols: 1, rows: 1 }
				];
			}

			return [
			{ title: 'Card 1', cols: 2, rows: 1 },
			{ title: 'Card 2', cols: 1, rows: 1 },
			{ title: 'Card 3', cols: 1, rows: 2 },
			{ title: 'Card 4', cols: 1, rows: 1 }
			];
		})
		);
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
	.pipe(
		map(result => result.matches)
		);
	constructor(
		public admin: AdminService,
		private breakpointObserver: BreakpointObserver,
	) {}

	ngOnInit() {
	}

}
