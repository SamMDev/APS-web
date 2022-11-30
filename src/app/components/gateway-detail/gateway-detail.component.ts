import { Component, OnInit } from '@angular/core';
import {GatewayDetail} from "../../model/gateway/GatewayDetail";
import {ActivatedRoute} from "@angular/router";
import {ChipCardsService} from "../../service/chip-card/chip-cards.service";
import {PassageForChipCardDataSource} from "../../table/passage-for-chip-card/passage-for-chip-card-datasource";
import {GatewayService} from "../../service/gateway/gateway.service";
import {
    PassageForGatewayTableDataSource
} from "../../table/passage-for-gateway-table/passage-for-gateway-table-datasource";

@Component({
  selector: 'app-gateway-detail',
  templateUrl: './gateway-detail.component.html',
  styleUrls: ['./gateway-detail.component.css']
})
export class GatewayDetailComponent implements OnInit {
    detail !: GatewayDetail;

    constructor(private activeRoute: ActivatedRoute, private gatewayService: GatewayService, public dataSource : PassageForGatewayTableDataSource) {
        this.activeRoute.params.subscribe(params => this.onRouteChange(params))
    }


    private onRouteChange(params: any): void {
        if (!params.id) return;
        this.gatewayService.getDetail(params.id).subscribe(detail => {
            this.detail = detail;
            this.dataSource.load(this.detail.id);
        });
    }

    ngOnInit(): void {
    }

}
