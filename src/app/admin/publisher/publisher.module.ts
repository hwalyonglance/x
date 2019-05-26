import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { PublisherComponent } from './publisher.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublisherFormComponent } from './publisher-form/publisher-form.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

@NgModule({
  declarations: [PublisherComponent, PublisherDetailComponent, PublisherFormComponent, PublisherListComponent],
  imports: [
    CommonModule,
    PublisherRoutingModule
  ]
})
export class PublisherModule { }
