import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
	{ path: '', component: AccountComponent, children: [
		{ path: '', component: AccountListComponent },
		{ path: ':id', component: AccountDetailComponent },
	] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }
