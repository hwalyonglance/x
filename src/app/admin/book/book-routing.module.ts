import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
	{
		path: '', component: BookComponent, children: [
			{ path: '', component: BookListComponent },
			{ path: ':id', children: [
				{ path: 'detail', component: BookDetailComponent }
			] },
		]
	},
	{ path: '**', pathMatch:'full',redirectTo:'/admin/book' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BookRoutingModule { }
