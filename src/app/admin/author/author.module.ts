import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DatatableModule } from '../../datatable/datatable.module';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorFormComponent } from './author-form/author-form.component';

@NgModule({
	declarations: [
		AuthorComponent,
		AuthorListComponent,
		AuthorDetailComponent,
		AuthorFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,

		DatatableModule,
		
		AuthorRoutingModule
	]
})
export class AuthorModule { }
