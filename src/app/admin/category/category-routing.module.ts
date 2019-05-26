import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const routes: Routes = [
	{
		path: '', component: CategoryComponent, children: [
			{ path: '', component: CategoryListComponent },
			{
				path: ':id', children: [
					{ path: 'detail', component: CategoryDetailComponent }
				]
			},
		]
	},
	{ path: '**', pathMatch:'full', redirectTo: '/admin/category' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoryRoutingModule {}
