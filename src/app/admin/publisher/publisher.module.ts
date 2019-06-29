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

import { PublisherRoutingModule } from './publisher-routing.module';
import { PublisherComponent } from './publisher.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublisherFormComponent } from './publisher-form/publisher-form.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

@NgModule({
	declarations: [
		PublisherComponent,
		PublisherDetailComponent,
		PublisherFormComponent,
		PublisherListComponent
	],
	entryComponents: [
		PublisherFormComponent
	],
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
		
		PublisherRoutingModule
	]
})
export class PublisherModule { }
