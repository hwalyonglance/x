import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { map } from 'rxjs/operators';

import { Category } from '../../../model';

import { AdminService } from '../../admin.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
	form: FormGroup;
	id: string;
	modeEdit = false;
	constructor(
		private afs: AngularFirestore,
		private fb: FormBuilder,
		public admin: AdminService,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<CategoryFormComponent>
	) { }
	ngOnInit() {
		this.buildForm();
	}
	buildForm() {
		this.form = this.fb.group({
			name: [''],
			description: [''],
		})
	}
	submit() {
		if (this.form.valid) {
			const value = this.form.value;
			if (this.modeEdit) {
				this.afs.collection('categories').doc(this.id).update(value);
			} else {
				this.afs.collection('categories').add(value);
			}
			this.dialogRef.close();
		}
	}
}
