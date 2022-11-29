import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {PassageForChipCard} from "../../model/passage/PassageForChipCard";
import {Injectable, ViewChild} from "@angular/core";
import {PassageService} from "../../service/passage/passage.service";

@Injectable()
export class PassageForChipCardDataSource extends DataSource<PassageForChipCard> {
    data !: PassageForChipCard[];
    length !: number;
    @ViewChild(MatPaginator)
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    chipCardId : any;

    constructor(private passageService : PassageService) {
        super();
    }

    connect(): Observable<PassageForChipCard[]> {
        return this.load(this.chipCardId);
    }

    disconnect(): void {
    }

    load(id : any): Observable<PassageForChipCard[]> {
        if (this.paginator == undefined) throw Error('Please set the paginator and sort on the data source before connecting.');
        return this.passageService.getPassagesForChipCard(id, this.paginator)
            .pipe(
                map(lazyData => {
                    this.length = lazyData.count;
                    this.data = lazyData.data;
                    return lazyData.data;
                })
            );
    }
}
