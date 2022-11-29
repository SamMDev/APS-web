import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PassageDetail} from "../../model/passage/passage-detail";
import {PassageService} from "../../service/passage/passage.service";

@Component({
  selector: 'app-passage-detail',
  templateUrl: './passage-detail.component.html',
  styleUrls: ['./passage-detail.component.css']
})
export class PassageDetailComponent implements OnInit {

    public passageDetail !: PassageDetail;

    constructor(private activeRoute: ActivatedRoute, private passageService: PassageService) {
        this.activeRoute.params.subscribe(params => this.onRouteChange(params))
    }

    ngOnInit(): void {
    }

    private onRouteChange(params: any): void {
        if (!params.id) return;
        this.passageService.getDetail(params.id).subscribe(detail => this.passageDetail = detail);
    }

}
