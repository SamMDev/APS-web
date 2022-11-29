import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LazyDataServiceService} from "../data/lazy-data-service.service";
import {AbstractLazyDataService} from "../AbstractLazyDataService";
import {ChipCard} from "../../model/chip-card/ChipCard";
import {ChipCardDetail} from "../../model/chip-card/ChipCardDetail";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {LazyData} from "../../model/LazyData";
import {PassageDetail} from "../../model/passage/passage-detail";

@Injectable({
  providedIn: 'root'
})
export class ChipCardsService implements AbstractLazyDataService<ChipCard, ChipCardDetail>{

    constructor(private httpClient: HttpClient, private lazyDataService: LazyDataServiceService) {
    }

    fetch(paginator: MatPaginator): Observable<LazyData<ChipCard>> {
        return this.httpClient.post<LazyData<ChipCard>>(
            "http://localhost:8080/chip-card/load",
            this.lazyDataService.getCriteriaFromPaginator(paginator),
            {}
        );
    }

    getDetail(id : number): Observable<ChipCardDetail> {
        return this.httpClient.get<ChipCardDetail>(
            "http://localhost:8080/chip-card/" + id
        );
    }


}
