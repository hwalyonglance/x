import { EventEmitter, Injectable } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
} from '@angular/material';

// import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
// import { SaveChangeConfirmationDialogComponent } from './save-change-confirmation-dialog/save-change-confirmation-dialog.component';
// import { SaveConfirmationDialogComponent } from './save-confirmation-dialog/save-confirmation-dialog.component';
import { SignOutDialogComponent } from './sign-out-dialog/sign-out-dialog.component';

@Injectable()
export class DialogService {
	// deleteRef: MatDialogRef<DeleteDialogComponent>;
	errorRef: MatDialogRef<ErrorDialogComponent>;
	// saveConfirmationRef: MatDialogRef<SaveConfirmationDialogComponent>;
	// saveChangeConfirmationRef: MatDialogRef<SaveChangeConfirmationDialogComponent>;
	signOutRef: MatDialogRef<SignOutDialogComponent>;
	constructor(
		public matDialog: MatDialog
	) { }
	open(type: 'delete' | 'error' | 'signOut', data: object = {}) {
		data = {
			...data,
			accept: new EventEmitter,
			cancel: new EventEmitter,
		};
		switch (type) {
			case 'error':
				this.errorRef = this.matDialog.open(ErrorDialogComponent, { data });
				this.errorRef.componentInstance.data.cancel.subscribe(() => {
					this.errorRef.close();
					this.errorRef = null;
				});
				return this.errorRef;
			// case 'delete':
			// 	this.deleteRef = this.matDialog.open(DeleteDialogComponent, { data });
			// 	this.deleteRef.componentInstance.data.cancel.subscribe(() => {
			// 		this.deleteRef.close();
			// 		this.deleteRef = null;
			// 	});
			// 	return this.deleteRef;
			// case 'save':
			// 	this.saveConfirmationRef = this.matDialog.open(SaveConfirmationDialogComponent, { data });
			// 	this.saveConfirmationRef.componentInstance.data.cancel.subscribe(() => {
			// 		this.saveConfirmationRef.close();
			// 		this.saveConfirmationRef = null;
			// 	});
			// 	return this.saveConfirmationRef;
			// case 'saveChange':
			// 	this.saveChangeConfirmationRef = this.matDialog.open(SaveChangeConfirmationDialogComponent, { data });
			// 	this.saveChangeConfirmationRef.componentInstance.data.cancel.subscribe(() => {
			// 		this.saveChangeConfirmationRef.close();
			// 		this.saveChangeConfirmationRef = null;
			// 	});
			// 	return this.saveChangeConfirmationRef;
			case 'signOut':
				this.signOutRef = this.matDialog.open(SignOutDialogComponent, { data });
				this.signOutRef.componentInstance.data.cancel.subscribe(() => {
					this.signOutRef.close();
					this.signOutRef = null;
				});
				return this.signOutRef;
		}
	}
}
