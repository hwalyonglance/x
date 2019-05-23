import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { DatatableModule } from '../../datatable/datatable.module';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';

const ADMIN_CATEGORY_MODULES = [
	CommonModule,
	FlexLayoutModule,
	
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,

	ReactiveFormsModule,

	DatatableModule,

	CategoryRoutingModule,
];

@NgModule({
	declarations: [CategoryComponent],
	exports: ADMIN_CATEGORY_MODULES,
	imports: [
		...ADMIN_CATEGORY_MODULES,
	],
})
export class CategoryModule { }
