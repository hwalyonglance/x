import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	categories = this.afs.collection('categories');
	form: FormGroup;
	constructor(
		private afs: AngularFirestore,
		private fb: FormBuilder,
	) {}
	ngOnInit() {
		this.buildForm();
		this.categories.snapshotChanges()
		.pipe(
			map(categories=>{
				return categories.map(category=>{
					return {
						id: category.payload.doc.id,
						...category.payload.doc.data()
					}
				});
			})
		).subscribe(c =>console.log('snapshotChanges', c));
	}
	buildForm() {
		this.form = this.fb.group({
			name: [''],
			description: [''],
		})
	}
}
