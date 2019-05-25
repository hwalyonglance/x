import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
	{ path: '', component: AdminComponent, children: [
		{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
		{ path: 'account', loadChildren: './account/account.module#AccountModule' },
		{ path: 'author', loadChildren: './author/author.module#AuthorModule' },
		{ path: 'book', loadChildren: './book/book.module#BookModule' },
		{ path: 'category', loadChildren: './category/category.module#CategoryModule' },
		{ path: 'publisher', loadChildren: './publisher/publisher.module#PublisherModule' },
	] },
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
	{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
