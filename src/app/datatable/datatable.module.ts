import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import { DatatableComponent } from './datatable.component';

const DATATABLE_MODULES = [
	CommonModule,
	ReactiveFormsModule,
	
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatToolbarModule,
];

@NgModule({
	declarations: [DatatableComponent],
	exports: [DATATABLE_MODULES, DatatableComponent],
	imports: DATATABLE_MODULES,
})
export class DatatableModule { }
