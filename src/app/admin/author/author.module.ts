import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
		AuthorFormComponent,
		AuthorDetailComponent,
		AuthorListComponent,
	],
	entryComponents: [AuthorFormComponent],
	imports: [
		CommonModule,
		// AngularFirestoreModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,

		DatatableModule,
		
		AuthorRoutingModule
	]
})
export class AuthorModule { }
