import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {map, tap} from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Passage} from "../../model/passage/passage";
import {AfterViewInit, Injectable, ViewChild} from "@angular/core";
import {PassageService} from "../../service/passage/passage.service";


@Injectable()
export class PassageDataTableDataSource extends DataSource<Passage> {

    data !: Passage[];
    length !: number;
    @ViewChild(MatPaginator)
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor(private passageService: PassageService) {
        super();
    }

    connect(): Observable<Passage[]> {
        return this.load();
    }

    load(): Observable<Passage[]> {
        if (this.paginator == undefined) throw Error('Please set the paginator and sort on the data source before connecting.');
        return this.passageService.fetch(this.paginator)
            .pipe(
                map(lazyData => {
                    this.length = lazyData.count;
                    this.data = lazyData.data;
                    return lazyData.data;
                })
            );
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect(): void {}

}
