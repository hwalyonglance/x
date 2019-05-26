import {
	AfterViewInit,
	Component,
	ɵComponentType as ComponentType,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DialogService } from '../dialog/dialog.service';

@Component({
	selector: 'app-datatable',
	templateUrl: './datatable.component.html',
	styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit, OnInit {
	private _columns = [];
	@Input()
	get columns() { return this._columns };
	set columns(columns) {
		this._columns = columns;
		this.displayedColumns = [...this.columns.filter(c=>!c.hidden).map(c=>c.name), '_actions'];
		this.displayedSearchColumns = this.displayedColumns.map(c=>'search_'+c);
	}
	@Input()
	get data() { return this.dataSource.data };
	set data(data) {
		this.dataSource.data = data;
	}
	@Output() add = new EventEmitter;
	@Output() edit = new EventEmitter;
	@Output() remove = new EventEmitter;
	@Output() search = new EventEmitter;
	@ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
	@ViewChild(MatSort, {static:false}) sort: MatSort;

	// allowMultiSelect = true;
	dataSource = new MatTableDataSource;
	displayedColumns = this.columns.filter(c=>!c.hidden).map(c=>c.name);
	displayedSearchColumns = this.displayedColumns.map(c=>'search_'+c);
	// initialSelection = [];
	filterForm: FormGroup;
	// selection = new SelectionModel(this.allowMultiSelect, this.initialSelection);;
	constructor(
		private fb: FormBuilder,
		private dialog: DialogService,
	) { }
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	ngOnInit() {
		this.buildFilterForm();
		this.filterForm.valueChanges.subscribe(v => {
			this.paginator.pageIndex = 0;
			this.dataSource.filter = v;
		});
		this.dataSource.filterPredicate = (col, filter) => {
			return Object.keys(col)
				.map(k => {
					const search = String(filter[k] || '');
					const str = String(col[k] || '');
					// if (this.filterCaseSensitive) {
					// 	return str.indexOf(search) !== -1;
					// }
					return (
						str.toLowerCase().indexOf(search.toLowerCase()) !== -1
					);
				})
				.every(v => v);
		};
	}
	buildFilterForm() {
		const controlsName: object = {};
		for (const col of this.displayedColumns) {
			controlsName[col] = [];
		}
		this.filterForm = this.fb.group(controlsName);
	}
	// /** Whether the number of selected elements matches the total number of rows. */
	// isAllSelected() {
	// 	const numSelected = this.selection.selected.length;
	// 	const numRows = this.dataSource.data.length;
	// 	return numSelected == numRows;
	// }

	// /** Selects all rows if they are not all selected; otherwise clear selection. */
	// masterToggle() {
	// 	this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
	// }
}
