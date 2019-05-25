import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { DatatableModule } from '../../datatable/datatable.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const ACCOUNT_MODULES = [
	MatTabsModule,

	DatatableModule,

	AccountRoutingModule
];

@NgModule({
	declarations: [AccountComponent, AccountListComponent, AccountDetailComponent],
	exports: [
		...ACCOUNT_MODULES,
	],
	imports: [
		CommonModule,
		...ACCOUNT_MODULES,
	]
})
export class AccountModule { }
