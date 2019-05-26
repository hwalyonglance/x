import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogService } from './dialog.service';

import { SignOutDialogComponent } from './sign-out-dialog/sign-out-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

const DIALOG_MODULES = [
	MatButtonModule,
	MatDialogModule
]

@NgModule({
	declarations: [
		SignOutDialogComponent,
		ErrorDialogComponent,
	],
	entryComponents:[
		SignOutDialogComponent,
		ErrorDialogComponent,
	],
	exports:[
		...DIALOG_MODULES
	],
	imports: [
		CommonModule,
		...DIALOG_MODULES
	],
	providers:[
		DialogService
	]
})
export class DialogModule { }
