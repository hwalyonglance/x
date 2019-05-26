import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { DatatableComponent } from '../../../datatable/datatable.component';
import { DialogService } from '../../../dialog/dialog.service';
import { AdminService } from '../../admin.service';
import { Category } from '../../../model';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
	@ViewChild(DatatableComponent, {static:false}) datatableRef: DatatableComponent;
	columns = [
		// { name: '_selection', header: '', hidden: false },
		{ name: 'id', header: 'Id', hidden: true },
		{ name: 'name', header: 'Nama', hidden: false },
		{ name: 'description', header: 'Keterangan', hidden: false },
		{ name: 'product', header: 'Produk', hidden: true },
	];
	data: Category[] = [];
	constructor(
		private afs: AngularFirestore,
		private dialog: DialogService,
	) { }

	ngOnInit() {
		this.afs.collection('categories')
		.snapshotChanges()
		.pipe(
			map(categories=>categories.map(category=>({
				id: category.payload.doc.id,
				...category.payload.doc.data() as Category
			})))
		).subscribe(data=>this.data=data);
	}
	onAdd() {
		let dialogRef = this.dialog.matDialog.open(CategoryFormComponent, {
			data: {
				editMode: false,
			}
		});
	}
	onEdit(category: Category) {
		let dialogRef = this.dialog.matDialog.open(CategoryFormComponent, {
			data: {
				id: category.id,
				editMode: true,
				value: category
			}
		});
	}
	remove(category: Category) {
		if (confirm('Hapus kategori: '+category.name+'?')) {
			this.afs.collection('categories').doc(category.id).delete();
		}
	}
}
