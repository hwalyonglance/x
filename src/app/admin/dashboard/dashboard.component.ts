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
					{ title: 'Card 1', cols: 1, rows: 2 },
					{ title: 'Card 2', cols: 1, rows: 1 },
					{ title: 'Card 3', cols: 1, rows: 1 },
					{ title: 'Card 4', cols: 2, rows: 2 },
					{ title: 'Card 5', cols: 1, rows: 1 },
					{ title: 'Card 6', cols: 1, rows: 2 },
					{ title: 'Card 7', cols: 2, rows: 1 },
					{ title: 'Card 8', cols: 2, rows: 1 },
					{ title: 'Card 9', cols: 1, rows: 1 },
					{ title: 'Card 10', cols: 1, rows: 1 },
				];
			}

			return [
				{
					title: 'desktop 1', cols: 2, rows: 1,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 2', cols: 1, rows: 1,
					text: `Lorem ipsum dolor sit amet.`,
				},
				{
					title: 'desktop 3', cols: 1, rows: 2,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.`,
				},
				{
					title: 'desktop 4', cols: 1, rows: 1,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.`,
				},
				{
					title: 'desktop 5', cols: 1, rows: 1,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore.`,
				},
				{
					title: 'desktop 6', cols: 1, rows: 2,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 7', cols: 1, rows: 2,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 8', cols: 1, rows: 1,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 9', cols: 1, rows: 1,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 10', cols: 1, rows: 1,
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
			];
		})
	);
	constructor(private breakpointObserver: BreakpointObserver) {}
	ngOnInit() {
	}
}
