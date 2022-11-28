import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { GatewayTableDataSource } from './gateway-table-datasource';
import {Gateway} from "../model/gateway/Gateway";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-gateway-table',
  templateUrl: './gateway-table.component.html',
  styleUrls: ['./gateway-table.component.css']
})
export class GatewayTableComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Gateway>;


    displayedColumns = ['id', 'code', 'name'];


    constructor(public datasource : GatewayTableDataSource) {
    }

    ngAfterViewInit(): void {
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
        this.table.dataSource = this.datasource;

        this.datasource.paginator.page
            .pipe(
                tap(() => this.datasource.paginator = this.paginator)
            )
            .subscribe(() => this.datasource.load().subscribe(res => this.datasource.data = res));
    }
}
