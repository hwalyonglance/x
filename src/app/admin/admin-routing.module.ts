import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
	{ path: '', component: AdminComponent, children: [
		{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule) },
		{ path: 'account', loadChildren: () => import('./account/account.module').then(m=>m.AccountModule) },
		{ path: 'author', loadChildren: () => import('./author/author.module').then(m=>m.AuthorModule) },
		{ path: 'book', loadChildren: () => import('./book/book.module').then(m=>m.BookModule) },
		{ path: 'category', loadChildren: () => import('./category/category.module').then(m=>m.CategoryModule) },
		{ path: 'publisher', loadChildren: () => import('./publisher/publisher.module').then(m=>m.PublisherModule) },
	] },
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
	{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
