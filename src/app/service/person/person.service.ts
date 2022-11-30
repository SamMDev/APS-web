import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LazyDataServiceService} from "../data/lazy-data-service.service";
import {AbstractLazyDataService} from "../AbstractLazyDataService";
import {Person} from "../../model/person/Person";
import {PersonDetail} from "../../model/person/PersonDetail";
import {MatPaginator} from "@angular/material/paginator";
import { Observable } from 'rxjs';
import {LazyData} from "../../model/LazyData";
import {Passage} from "../../model/passage/passage";
import {PassageDetail} from "../../model/passage/passage-detail";

@Injectable({
  providedIn: 'root'
})
export class PersonService implements AbstractLazyDataService<Person, PersonDetail>{

    constructor(private httpClient: HttpClient, private lazyDataService: LazyDataServiceService) {
    }

    fetch(paginator: MatPaginator): Observable<LazyData<Person>> {
        return this.httpClient.post<LazyData<Person>>(
            "http://localhost:8080/person/load",
            this.lazyDataService.getCriteriaFromPaginator(paginator),
            {}
        );
    }

    getDetail(id : any) : Observable<PersonDetail> {
        return this.httpClient.get<PersonDetail>(
            "http://localhost:8080/person/" + id
        );
    }


}
