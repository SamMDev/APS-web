import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ChipCardTableDataSource } from './chip-card-table-datasource';
import {ChipCard} from "../model/chip-card/ChipCard";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-chip-card-table',
  templateUrl: './chip-card-table.component.html',
  styleUrls: ['./chip-card-table.component.css']
})
export class ChipCardTableComponent implements AfterViewInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<ChipCard>;
    dataSource: ChipCardTableDataSource;

    displayedColumns = ['id', 'serialNumber', 'ownerName'];

    constructor(public chipCardDatatable: ChipCardTableDataSource) {
        this.dataSource = chipCardDatatable;
    }


    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.dataSource.connect();

        this.dataSource.paginator.page
            .pipe(
                tap(() => this.dataSource.paginator = this.paginator)
            )
            .subscribe(() => this.dataSource.load().subscribe(res => this.dataSource.data = res));

    }
}
