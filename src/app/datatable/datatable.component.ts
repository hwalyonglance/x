import {
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
		this.displayedColumns = [...this.columns.map(c=>c.name), '_actions'];
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
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	// allowMultiSelect = true;
	dataSource = new MatTableDataSource;
	displayedColumns = this.columns.map(c=>c.name);
	displayedSearchColumns = this.columns.map(c=>c.name);
	// initialSelection = [];
	// selection = new SelectionModel(this.allowMultiSelect, this.initialSelection);;
	constructor() { }
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	ngOnInit() {
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
