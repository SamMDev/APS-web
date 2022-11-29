import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Passage} from "../../model/passage/passage";
import {MatPaginator} from "@angular/material/paginator";
import {LazyDataServiceService} from "../data/lazy-data-service.service";
import {LazyData} from "../../model/LazyData";
import {AbstractLazyDataService} from "../AbstractLazyDataService";
import {PassageDetail} from "../../model/passage/passage-detail";
import {PassageForChipCard} from "../../model/passage/PassageForChipCard";

@Injectable({
  providedIn: 'root'
})
export class PassageService implements AbstractLazyDataService<Passage, PassageDetail>{


    constructor(private httpClient: HttpClient, private lazyDataService: LazyDataServiceService) {
    }


    fetch(paginator: MatPaginator): Observable<LazyData<Passage>> {
        return this.httpClient.post<LazyData<Passage>>(
            "http://localhost:8080/passage/load",
            this.lazyDataService.getCriteriaFromPaginator(paginator),
            {}
        );
    }

    getDetail(id : any): Observable<PassageDetail> {
        return this.httpClient.get<PassageDetail>(
            "http://localhost:8080/passage/" + id
        );
    }

    getPassagesForChipCard(id : any, paginator: MatPaginator) : Observable<LazyData<PassageForChipCard>> {
        return this.httpClient.post<LazyData<PassageForChipCard>>(
            "http://localhost:8080/passage/chip-card/" + id,
            this.lazyDataService.getCriteriaFromPaginator(paginator),
            {}
        );
    }




}
