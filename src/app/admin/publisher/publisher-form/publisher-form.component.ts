import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { map } from 'rxjs/operators';

import { Publisher, IFormDialog } from '../../../model';

import { AdminService } from '../../admin.service';

@Component({
	selector: 'app-publisher-form',
	templateUrl: './publisher-form.component.html',
	styleUrls: ['./publisher-form.component.scss']
})
export class PublisherFormComponent implements OnInit {
	form: FormGroup;
	constructor(
		private afs: AngularFirestore,
		private fb: FormBuilder,
		public admin: AdminService,
		@Inject(MAT_DIALOG_DATA) public data: IFormDialog<Publisher>,
		public dialogRef: MatDialogRef<PublisherFormComponent>
	) { }
	ngOnInit() {
		this.buildForm();
		if (this.data.editMode) {
			this.form.get('address').setValue(this.data.value.address);
			this.form.get('name').setValue(this.data.value.name);
			this.form.get('phone').setValue(this.data.value.phone);
		}
	}
	buildForm() {
		this.form = this.fb.group({
			address: [''],
			name: [''],
			phone: [''],
		});
	}
	submit() {
		if (this.form.valid && confirm('Simpan data ini?')) {
			const value = this.form.value;
			if (this.data.editMode) {
				this.afs.collection('publishers').doc(this.data.id).update(value);
			} else {
				this.afs.collection('publishers').add(value);
			}
			this.dialogRef.close();
		}
	}
}
