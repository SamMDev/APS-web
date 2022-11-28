import { Injectable } from '@angular/core';
import {LazyCriteria} from "../../model/LazyCriteria";
import {MatPaginator} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class LazyDataServiceService {
    constructor() { }


    getCriteriaFromPaginator(paginator: MatPaginator): LazyCriteria {
        let offset = paginator.pageIndex * paginator.pageSize;
        let limit = paginator.pageSize;
        return {
            offset: offset,
            limit: paginator.length != 0 && paginator.length < limit ? paginator.length : limit,
            filter: {}
        };
    }
}
