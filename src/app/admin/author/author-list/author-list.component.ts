import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { DatatableComponent } from '../../../datatable/datatable.component';
import { DialogService } from '../../../dialog/dialog.service';
import { AdminService } from '../../admin.service';
import { Author } from '../../../model';
import { AuthorFormComponent } from '../author-form/author-form.component';

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
	data: Author[] = [];
	constructor(
		private afs: AngularFirestore,
		private dialog: DialogService,
	) {}
	ngOnInit() {
		this.afs.collection('authors')
		.snapshotChanges()
		.pipe(
			map(authors=>authors.map(author=>({
				id: author.payload.doc.id,
				...author.payload.doc.data() as Author
			})))
		).subscribe(data=>this.data=data);
	}
	onAdd() {
		let dialogRef = this.dialog.matDialog.open<AuthorFormComponent>(AuthorFormComponent, {
			data: {
				editMode: false,
			}
		});
	}
	onEdit(author: Author) {
		let dialogRef = this.dialog.matDialog.open<AuthorFormComponent>(AuthorFormComponent, {
			data: {
				id: author.id,
				editMode: true,
				value: author
			}
		});
	}
	remove(author: Author) {
		if (confirm(`Hapus Penulis ${author.name}?`)) {
			this.afs.collection('authors').doc(author.id).delete();
		}
	}
}
