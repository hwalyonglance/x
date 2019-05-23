import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
	{
		path: '', component: FrontPageComponent, children: [
			{ path: '', component: HomeComponent }
		],
	},
	{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
