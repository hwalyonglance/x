import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DatatableComponent } from './datatable.component';

const DATATABLE_MODULES = [
	CommonModule,
	MatButtonModule,
	MatIconModule,
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
