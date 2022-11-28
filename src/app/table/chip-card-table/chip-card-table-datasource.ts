import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Injectable, ViewChild} from "@angular/core";
import {ChipCard} from "../../model/chip-card/ChipCard";
import {ChipCardsService} from "../../service/chip-card/chip-cards.service";

@Injectable()
export class ChipCardTableDataSource extends DataSource<ChipCard> {

    data !: ChipCard[];
    length !: number;
    @ViewChild(MatPaginator)
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor(private chipCardsService: ChipCardsService) {
        super();
    }

    connect(): Observable<ChipCard[]> {
        return this.load();
    }

    disconnect(): void {
    }

    load(): Observable<ChipCard[]> {
        if (this.paginator == undefined) throw Error('Please set the paginator and sort on the data source before connecting.');
        return this.chipCardsService.fetch(this.paginator)
            .pipe(
                map(lazyData => {
                    this.length = lazyData.count;
                    this.data = lazyData.data;
                    return lazyData.data;
                })
            );
    }


}

