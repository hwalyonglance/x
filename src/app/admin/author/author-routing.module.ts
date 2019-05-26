import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorComponent } from './author.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [
	{
		path: '', component: AuthorComponent, children: [
			{ path: '', component: AuthorListComponent },
			{ path: ':id', children: [
				{ path: 'detail', component: AuthorDetailComponent }
			] },
		]
	},
	{ path: '**', pathMatch:'full',redirectTo:'/admin/author' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthorRoutingModule { }
