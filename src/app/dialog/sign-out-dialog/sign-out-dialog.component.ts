import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { SharedDialog } from '../model';

@Component({
	selector: 'app-sign-out-dialog',
	templateUrl: './sign-out-dialog.component.html',
	styles: []
})
export class SignOutDialogComponent implements OnInit {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: SharedDialog,
		public dialogRef: MatDialogRef<SignOutDialogComponent>
	) { }
	ngOnInit() {}
}
