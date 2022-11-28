import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Passage} from "../model/passage/passage";
import {MatPaginator} from "@angular/material/paginator";
import {LazyDataServiceService} from "./data/lazy-data-service.service";
import {LazyData} from "../model/LazyData";

@Injectable({
  providedIn: 'root'
})
export class PassageService {


    constructor(private httpClient: HttpClient, private lazyDataService: LazyDataServiceService) {
    }


    fetch(paginator: MatPaginator): Observable<LazyData<Passage>> {
        console.log(this.lazyDataService.getCriteriaFromPaginator(paginator));
        return this.httpClient.post<LazyData<Passage>>(
            "http://localhost:8080/passage/load",
            this.lazyDataService.getCriteriaFromPaginator(paginator),
            {}
        );
    }




}
