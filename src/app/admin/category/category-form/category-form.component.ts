import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { map } from 'rxjs/operators';

import { Category, IFormDialog } from '../../../model';

import { AdminService } from '../../admin.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
	form: FormGroup;
	constructor(
		private afs: AngularFirestore,
		private fb: FormBuilder,
		public admin: AdminService,
		@Inject(MAT_DIALOG_DATA) public data: IFormDialog<Category>,
		public dialogRef: MatDialogRef<CategoryFormComponent>
	) { }
	ngOnInit() {
		this.buildForm();
		if (this.data.editMode) {
			this.form.get('name').setValue(this.data.value.name);
			this.form.get('description').setValue(this.data.value.description);
		}
	}
	buildForm() {
		this.form = this.fb.group({
			name: [''],
			description: [''],
		})
	}
	submit() {
		if (this.form.valid && confirm('Simpan data ini?')) {
			const value = this.form.value;
			if (this.data.editMode) {
				this.afs.collection('categories').doc(this.data.id).update(value);
			} else {
				this.afs.collection('categories').add(value);
			}
			this.dialogRef.close();
		}
	}
}
