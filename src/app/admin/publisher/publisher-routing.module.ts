import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublisherComponent } from './publisher.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

const routes: Routes = [
	{
		path: '', component: PublisherComponent, children: [
			{ path: '', component: PublisherListComponent },
			{ path: ':id', children: [
				{ path: 'detail', component: PublisherDetailComponent }
			] },
		]
	},
	{ path: '**', pathMatch:'full',redirectTo:'/admin/publisher' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublisherRoutingModule { }
