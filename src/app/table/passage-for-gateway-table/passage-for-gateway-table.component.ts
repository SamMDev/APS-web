import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PassageForGatewayTableDataSource } from './passage-for-gateway-table-datasource';
import {ActivatedRoute} from "@angular/router";
import {GatewayDetail} from "../../model/gateway/GatewayDetail";
import {GatewayService} from "../../service/gateway/gateway.service";
import {tap} from "rxjs/operators";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {PassageForChipCard} from "../../model/passage/PassageForChipCard";
import {PassageForGateway} from "../../model/passage/PassageForGateway";

@Component({
  selector: 'app-passage-for-gateway-table',
  templateUrl: './passage-for-gateway-table.component.html',
  styleUrls: ['./passage-for-gateway-table.component.css']
})
export class PassageForGatewayTableComponent implements AfterViewInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<PassageForGateway>;

    gatewayDetail !: GatewayDetail;
    displayedColumns = ['id', 'time', 'chipCardId', 'chipCardSerialNumber', 'personId', 'personName'];

    constructor(private activeRoute: ActivatedRoute, private gatewayService: GatewayService, public dataSource : PassageForGatewayTableDataSource) {
        this.activeRoute.params.subscribe(params => this.onRouteChange(params))
    }


    private onRouteChange(params: any): void {
        if (!params.id) return;
        this.gatewayService.getDetail(params.id).subscribe(detail => {
            this.gatewayDetail = detail;
            this.dataSource.gatewayId = this.gatewayDetail.id;
            // this.dataSource.load(this.gatewayDetail.id);
        });
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
            .subscribe(() => this.dataSource.load(this.gatewayDetail.id).subscribe(res => this.dataSource.data = res));
    }

}
