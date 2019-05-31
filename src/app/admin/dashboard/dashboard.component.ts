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
			return [
				{
					title: 'desktop 1', img: {height: 150,width:350},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 2', img: {height: 250,width:350},
					text: `Lorem ipsum dolor sit amet.`,
				},
				{
					title: 'desktop 3', img: {height: 450,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.`,
				},
				{
					title: 'desktop 4', img: {height: 150,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.`,
				},
				{
					title: 'desktop 5', img: {height: 150,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore.`,
				},
				{
					title: 'desktop 6', img: {height: 150,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 7', img: {height: 150,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 8', img: {height: 150,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 9', img: {height: 150,width:250},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.`,
				},
				{
					title: 'desktop 10', img: {height: 150,width:250},
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
