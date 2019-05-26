import {
	AfterViewInit,
	Component,
	ɵComponentType as ComponentType,
	OnInit,
	ViewChild,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

import { map } from 'rxjs/operators';

import { DatatableComponent } from '../../datatable/datatable.component';
import { DialogService } from '../../dialog/dialog.service';
import { Category } from '../../model';
import { AdminService } from '../admin.service';
import { CategoryFormComponent } from './category-form/category-form.component';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit, OnInit {
	@ViewChild(DatatableComponent, {static:false}) datatableRef: DatatableComponent;
	columns = [
		// { name: '_selection', header: '', hidden: false },
		{ name: 'id', header: 'Id', hidden: true },
		{ name: 'name', header: 'Nama', hidden: false },
		{ name: 'description', header: 'Keterangan', hidden: false },
		{ name: 'product', header: 'Produk', hidden: true },
	];
	data = [];
	constructor(
		private afs: AngularFirestore,
		private dialog: DialogService,
		private fb: FormBuilder,
		public admin: AdminService,
	) {}
	ngAfterViewInit() {

	}
	ngOnInit() {
		this.admin.title = 'Kategori';
		this.afs.collection('categories')
		.snapshotChanges()
		.pipe(
			map(categories=>categories.map(category=>({
				id: category.payload.doc.id,
				...category.payload.doc.data()
			})))
		).subscribe(data=>this.data=data);
	}
	onAdd() {
		let dialogRef = this.dialog.matDialog.open(CategoryFormComponent, {
			data: {
				modeEdit: false,
			}
		});
	}
	onEdit(category: Category) {
		let dialogRef = this.dialog.matDialog.open(CategoryFormComponent, {
			data: {
				id: category.id,
				modeEdit: false,
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
