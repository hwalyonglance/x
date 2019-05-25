import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { Account } from '../../../model';

@Component({
	selector: 'app-account-list',
	templateUrl: './account-list.component.html',
	styles: []
})
export class AccountListComponent implements OnInit {
	columns = [
		// { name: '_selection', header: '', hidden: false },
		{ name: 'id', header: 'Id', hidden: true },
		{ name: 'displayName', header: 'Nama', hidden: false },
		{ name: 'email', header: 'Email', hidden: false },
		{ name: 'emailVerified', header: 'Terverifikasi', hidden: false },
		{ name: 'phone', header: 'Telepon', hidden: false },
		{ name: 'photoURL', header: '', hidden: true },
	];
	data = [];
	constructor(
		private afs: AngularFirestore,
	) { }

	ngOnInit() {
		this.afs.collection('accounts')
		.snapshotChanges()
		.pipe(
			map(accounts=>{
				return accounts.map(account=>account.payload.doc.data());
			})
		).subscribe(data=>{
			console.log('accounts',data);
			this.data=data
		});
	}

}
