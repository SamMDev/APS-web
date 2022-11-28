import {AfterViewInit, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PassageDataTableDataSource } from './passage-data-table-datasource';
import {Passage} from "../../model/passage/passage";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-passage-data-table',
  templateUrl: './passage-data-table.component.html',
  styleUrls: ['./passage-data-table.component.css']
})
@Injectable()
export class PassageDataTableComponent implements AfterViewInit {

    displayedColumns = ['passageId', 'time', 'gatewayCode', 'gatewayName', 'personName'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Passage>;
    constructor(public dataSource: PassageDataTableDataSource) {
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
