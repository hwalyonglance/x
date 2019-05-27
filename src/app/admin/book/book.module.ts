import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
	declarations: [
		BookComponent,
		BookDetailComponent,
		BookFormComponent,
		BookListComponent,
	],
	imports: [
		CommonModule,
		
		LayoutModule,
		MatButtonModule,
		MatCardModule,
		MatGridListModule,
		MatIconModule,
		MatMenuModule,

		BookRoutingModule
	]
})
export class BookModule { }
