import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogService } from './dialog.service';

import { SignOutDialogComponent } from './sign-out-dialog/sign-out-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
	declarations: [
		SignOutDialogComponent,
		ErrorDialogComponent,
	],
	imports: [
		CommonModule,
		MatDialogModule
	],
	providers:[
		DialogService
	]
})
export class SharedModule { }
