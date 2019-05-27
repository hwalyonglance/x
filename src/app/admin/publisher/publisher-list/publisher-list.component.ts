import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { DatatableComponent } from '../../../datatable/datatable.component';
import { DialogService } from '../../../dialog/dialog.service';
import { AdminService } from '../../admin.service';
import { Publisher, IFormDialog } from '../../../model';
import { PublisherFormComponent } from '../publisher-form/publisher-form.component';

@Component({
	selector: 'app-publisher-list',
	templateUrl: './publisher-list.component.html',
	styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent implements OnInit {
	columns = [
		// { name: '_selection', header: '', hidden: false },
		{ name: 'id', header: 'Id', hidden: true },
		{ name: 'name', header: 'Nama', hidden: false },
		{ name: 'phone', header: 'Telepon', hidden: false },
		{ name: 'address', header: 'Alamat', hidden: true },
	];
	data: Publisher[] = [];
	constructor(
		private afs: AngularFirestore,
		private dialog: DialogService,
	) {}
	ngOnInit() {
		this.afs.collection('publishers')
		.snapshotChanges()
		.pipe(
			map(publishers=>publishers.map(publisher=>({
				id: publisher.payload.doc.id,
				...publisher.payload.doc.data() as Publisher
			})))
		).subscribe(data=>this.data=data);
	}
	onAdd() {
		let dialogRef = this.dialog.matDialog.open<PublisherFormComponent, IFormDialog<Publisher>>(PublisherFormComponent, {
			data: {
				editMode: false,
			}
		});
	}
	onEdit(publisher: Publisher) {
		let dialogRef = this.dialog.matDialog.open<PublisherFormComponent, IFormDialog<Publisher>>(PublisherFormComponent, {
			data: {
				id: publisher.id,
				editMode: true,
				value: publisher
			}
		});
	}
	remove(publisher: Publisher) {
		if (confirm(`Hapus Penerbit ${publisher.name}?`)) {
			this.afs.collection('publishers').doc(publisher.id).delete();
		}
	}
}
