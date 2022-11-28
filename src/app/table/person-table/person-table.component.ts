import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PersonTableDataSource } from './person-table-datasource';
import {Person} from "../../model/person/Person";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<Person>;

    constructor(public dataSource : PersonTableDataSource) {
    }

    displayedColumns = ['id', 'name'];

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;

        this.dataSource.paginator.page
            .pipe(
                tap(() => this.dataSource.paginator = this.paginator)
            )
            .subscribe(() => this.dataSource.load().subscribe(res => this.dataSource.data = res));
    }
}
