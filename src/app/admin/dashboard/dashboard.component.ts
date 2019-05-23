import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
	constructor(private breakpointObserver: BreakpointObserver) {}
	ngOnInit() {
	}
}
