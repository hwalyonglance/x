import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import { DatatableModule } from '../datatable/datatable.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';

const ADMIN_MODULES = [
	CommonModule,
	FlexLayoutModule,
	
	LayoutModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule,

	ReactiveFormsModule,

	DatatableModule,
];

@NgModule({
	declarations: [AdminComponent],
	exports: ADMIN_MODULES,
	imports: [
		...ADMIN_MODULES,
		AdminRoutingModule
	],
	providers:[
		AdminService
	]
})
export class AdminModule { }
