import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-publisher',
	template: `
		<h1 class="mat-h1">Penerbit</h1>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export class PublisherComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
}
