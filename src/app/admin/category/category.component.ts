import {
	Component,
	OnInit,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

import { map } from 'rxjs/operators';

import { Category } from '../../shared/category';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	columns = [
		// { name: '_selection', header: '', hidden: false },
		{ name: 'id', header: 'Id', hidden: false },
		{ name: 'name', header: 'Nama', hidden: false },
		{ name: 'description', header: 'Keterangan', hidden: false },
		{ name: 'product', header: 'Produk', hidden: false },
	];
	data = [];
	form: FormGroup;
	id: string;
	modeEdit = false;
	showForm = false;
	constructor(
		private afs: AngularFirestore,
		private fb: FormBuilder,
	) {}
	ngOnInit() {
		this.buildForm();
		this.afs.collection('categories')
		.snapshotChanges()
		.pipe(
			map(categories=>{
				return categories.map(category=>{
					return {
						id: category.payload.doc.id,
						...category.payload.doc.data()
					}
				});
			})
		).subscribe(data=>this.data=data);
	}
	buildForm() {
		this.form = this.fb.group({
			name: [''],
			description: [''],
		})
	}
	cancelEdit() {
		this.modeEdit = false;
		this.id = undefined;
		this.buildForm();
	}
	edit(category: Category) {
		this.modeEdit = true;
		this.id = category.id;
		this.form.get('name').setValue(category.name);
		this.form.get('description').setValue(category.description);
	}
	remove(category: Category) {
		if (confirm('Hapus kategori: '+category.name+'?')) {
			this.afs.collection('categories').doc(category.id).delete();
		}
	}
	submit() {
		if (this.form.valid) {
			const value = this.form.value;
			if (this.modeEdit) {
				this.afs.collection('categories').doc(this.id).update(value);
			} else {
				this.afs.collection('categories').add(value);
			}
			this.buildForm();
			this.showForm = false;
		}
	}
}
