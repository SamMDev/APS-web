import { CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map} from 'rxjs/operators';
import {Observable, of as observableOf, merge} from 'rxjs';
import {Gateway} from "../../model/gateway/Gateway";
import {Injectable, ViewChild} from "@angular/core";
import {GatewayService} from "../../service/gateway/gateway.service";

@Injectable()
export class GatewayTableDataSource extends DataSource<Gateway> {

    data !: Gateway[];
    length !: number;
    @ViewChild(MatPaginator)
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor(private gatewayService : GatewayService) {
        super();
    }

    connect(): Observable<Gateway[]> {
        return this.load();
    }

    disconnect(): void {
    }


    load(): Observable<Gateway[]> {
        if (this.paginator == undefined) throw Error('Please set the paginator and sort on the data source before connecting.');
        return this.gatewayService.fetch(this.paginator)
            .pipe(
                map(lazyData => {
                    this.length = lazyData.count;
                    this.data = lazyData.data;
                    return lazyData.data;
                })
            );
    }



}
