import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
	{ path: '', component: AdminComponent, children: [
		{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
		{ path: 'category', loadChildren: './category/category.module#CategoryModule' },
		// { path: 'product', component: DashboardComponent },
		// { path: 'stock', component: DashboardComponent },
		// { path: 'sales', component: DashboardComponent },
	] },
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
	{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
