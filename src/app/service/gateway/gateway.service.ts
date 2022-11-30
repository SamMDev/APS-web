import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LazyDataServiceService} from "../data/lazy-data-service.service";
import {AbstractLazyDataService} from "../AbstractLazyDataService";
import {Gateway} from "../../model/gateway/Gateway";
import {GatewayDetail} from "../../model/gateway/GatewayDetail";
import {LazyData} from "../../model/LazyData";
import {ChipCard} from "../../model/chip-card/ChipCard";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GatewayService implements AbstractLazyDataService<Gateway, GatewayDetail>{

    constructor(private httpClient: HttpClient, private lazyDataService: LazyDataServiceService) {
    }

    fetch(paginator: MatPaginator): Observable<LazyData<Gateway>> {
        return this.httpClient.post<LazyData<Gateway>>(
            "http://localhost:8080/gateway/load",
            this.lazyDataService.getCriteriaFromPaginator(paginator),
            {}
        );
    }

    getDetail(id : any): Observable<GatewayDetail> {
        return this.httpClient.get<GatewayDetail>(
            "http://localhost:8080/gateway/" + id
        );
    }


}
