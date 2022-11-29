import {AfterViewInit, Component, Injectable, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PassageForChipCardDataSource } from './passage-for-chip-card-datasource';
import {Passage} from "../../model/passage/passage";
import {tap} from "rxjs/operators";
import {PassageForChipCard} from "../../model/passage/PassageForChipCard";
import {ChipCardDetail} from "../../model/chip-card/ChipCardDetail";
import {ActivatedRoute} from "@angular/router";
import {ChipCardsService} from "../../service/chip-card/chip-cards.service";

@Component({
  selector: 'app-passage-for-chip-card',
  templateUrl: './passage-for-chip-card.component.html',
  styleUrls: ['./passage-for-chip-card.component.css']
})
@Injectable()
export class PassageForChipCardComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<PassageForChipCard>;

    displayedColumns = ['passageId', 'time', 'gatewayId', 'gatewayCode', 'gatewayName'];

    chipCardDetail !: ChipCardDetail;

    constructor(public dataSource: PassageForChipCardDataSource, private activeRoute: ActivatedRoute, private chipCardService: ChipCardsService) {
        this.activeRoute.params.subscribe(params => this.onRouteChange(params))
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
            .subscribe(() => this.dataSource.load(this.chipCardDetail.id).subscribe(res => this.dataSource.data = res));
    }

    private onRouteChange(params: any): void {
        if (!params.id) return;
        this.dataSource.chipCardId = params.id;
        this.chipCardService.getDetail(params.id).subscribe(detail => {
            this.chipCardDetail = detail;
            this.dataSource.load(this.chipCardDetail.id).subscribe(data => {
                this.dataSource.data = data;
            });
        });
    }
}

