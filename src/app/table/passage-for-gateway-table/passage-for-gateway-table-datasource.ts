import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {PassageForGateway} from "../../model/passage/PassageForGateway";
import {Injectable, ViewChild} from "@angular/core";
import {PassageService} from "../../service/passage/passage.service";


@Injectable()
export class PassageForGatewayTableDataSource extends DataSource<PassageForGateway> {
    data!: PassageForGateway[];
    length !: number;
    @ViewChild(MatPaginator)
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    gatewayId : any;

    constructor(private passageService : PassageService) {
        super();
    }

    connect(): Observable<PassageForGateway[]> {
        return this.load(this.gatewayId);
    }

    disconnect(): void {
    }

    load(id : any): Observable<PassageForGateway[]> {
        if (this.paginator == undefined) throw Error('Please set the paginator and sort on the data source before connecting.');
        return this.passageService.getPassagesForGateway(id, this.paginator)
            .pipe(
                map(lazyData => {
                    this.length = lazyData.count;
                    this.data = lazyData.data;
                    return lazyData.data;
                })
            );
    }
}
