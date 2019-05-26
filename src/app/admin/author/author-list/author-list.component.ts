import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { Author } from '../../../model';

import { AdminService } from '../../admin.service';

@Component({
	selector: 'app-author-list',
	templateUrl: './author-list.component.html',
	styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
	columns = [
		// { name: '_selection', header: '', hidden: false },
		{ name: 'id', header: 'Id', hidden: true },
		{ name: 'name', header: 'Nama', hidden: false },
		{ name: 'phone', header: 'Telepon', hidden: false },
	];
	data = [];
	constructor(
		public admin: AdminService,
		private afs: AngularFirestore,
	) {}
	ngOnInit() {
		this.afs.collection('authors')
		.snapshotChanges()
		.pipe(
			map(authors=>authors.map(author=>({
				id: author.payload.doc.id,
				...author.payload.doc.data()
			})))
		).subscribe(data=>this.data=data);
	}
}
