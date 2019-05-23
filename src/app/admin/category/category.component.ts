import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	form: FormGroup;
	constructor(
		private fb: FormBuilder
	) {}
	ngOnInit() {
		this.buildForm();
	}
	buildForm() {
		this.form = this.fb.group({
			name: [''],
			description: [''],
		})
	}
}
