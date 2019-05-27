import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { map } from 'rxjs/operators';

import { Author, IFormDialog } from '../../../model';

import { AdminService } from '../../admin.service';

@Component({
	selector: 'app-author-form',
	templateUrl: './author-form.component.html',
	styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {
	form: FormGroup;
	constructor(
		private afs: AngularFirestore,
		private fb: FormBuilder,
		public admin: AdminService,
		@Inject(MAT_DIALOG_DATA) public data: IFormDialog<Author>,
		public dialogRef: MatDialogRef<AuthorFormComponent>
	) { }
	ngOnInit() {
		this.buildForm();
		if (this.data.editMode) {
			this.form.get('name').setValue(this.data.value.name);
			this.form.get('phone').setValue(this.data.value.phone);
		}
	}
	buildForm() {
		this.form = this.fb.group({
			name: [''],
			phone: [''],
		});
	}
	submit() {
		if (this.form.valid && confirm('Simpan data ini?')) {
			const value = this.form.value;
			if (this.data.editMode) {
				this.afs.collection('authors').doc(this.data.id).update(value);
			} else {
				this.afs.collection('authors').add(value);
			}
			this.dialogRef.close();
		}
	}
}
