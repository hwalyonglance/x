import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [BookComponent, BookDetailComponent, BookFormComponent, BookListComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
