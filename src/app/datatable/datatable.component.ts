import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-datatable',
	templateUrl: './datatable.component.html',
	styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit, OnInit {
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	columns = [
		{ name: 'id', header: 'Id', hidden: false },
		{ name: 'name', header: 'Nama', hidden: false },
		{ name: 'description', header: 'Keterangan', hidden: false },
		{ name: 'product', header: 'Produk', hidden: false },
	];

	dataSource = new MatTableDataSource;

	displayedColumns = this.columns.map(c=>c.name);

	constructor() { }
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	ngOnInit() {
	}

}
