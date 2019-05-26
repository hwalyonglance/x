import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
// import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { DatatableModule } from '../../datatable/datatable.module';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';

const ADMIN_CATEGORY_MODULES = [
	CommonModule,
	AngularFirestoreModule,
	FlexLayoutModule,
	
	MatButtonModule,
	MatCardModule,
	// MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,

	ReactiveFormsModule,

	DatatableModule,

	CategoryRoutingModule,
];

@NgModule({
	declarations: [CategoryComponent, CategoryFormComponent, CategoryDetailComponent, CategoryListComponent],
	exports: ADMIN_CATEGORY_MODULES,
	imports: [
		...ADMIN_CATEGORY_MODULES,
	],
})
export class CategoryModule { }
