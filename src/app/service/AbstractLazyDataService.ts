import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {LazyData} from "../model/LazyData";

/**
 * @param L lazy data model
 * @param D detail data model
 */
export interface AbstractLazyDataService<L, D> {

    fetch(paginator: MatPaginator): Observable<LazyData<L>>;


}
