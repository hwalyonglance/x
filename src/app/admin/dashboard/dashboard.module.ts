import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_MODULES = [
	CommonModule,
	
	LayoutModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatIconModule,
	MatMenuModule,
];

@NgModule({
	declarations: [DashboardComponent],
	exports: DASHBOARD_MODULES,
	imports: [
		...DASHBOARD_MODULES,
		DashboardRoutingModule
	],
})
export class DashboardModule { }
