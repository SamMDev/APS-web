import { Component, OnInit } from '@angular/core';
import {ChipCardDetail} from "../../model/chip-card/ChipCardDetail";
import {ActivatedRoute} from "@angular/router";
import {ChipCardsService} from "../../service/chip-card/chip-cards.service";

@Component({
  selector: 'app-chip-card-detail',
  templateUrl: './chip-card-detail.component.html',
  styleUrls: ['./chip-card-detail.component.css']
})
export class ChipCardDetailComponent implements OnInit {

    chipCardDetail !: ChipCardDetail;

    constructor(private activeRoute: ActivatedRoute, private chipCardService: ChipCardsService) {
        this.activeRoute.params.subscribe(params => this.onRouteChange(params))
    }

    ngOnInit(): void {
    }

    private onRouteChange(params: any): void {
        if (!params.id) return;
        this.chipCardService.getDetail(params.id).subscribe(detail => this.chipCardDetail = detail);
    }

}
