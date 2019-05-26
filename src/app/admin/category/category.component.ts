import {
	AfterViewInit,
	Component,
	OnInit,
	ViewChild,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';


import { AdminService } from '../admin.service';
import { Category } from '../../model';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit, OnInit {
	constructor(
		public admin: AdminService,
	) {}
	ngAfterViewInit() {
	}
	ngOnInit() {
		this.admin.title = 'Kategori';
	}
}
