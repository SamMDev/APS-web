import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Person} from "../../model/person/Person";
import {Injectable, ViewChild} from "@angular/core";
import {PersonService} from "../../service/person/person.service";

@Injectable()
export class PersonTableDataSource extends DataSource<Person> {

    data !: Person[];
    length !: number;
    @ViewChild(MatPaginator)
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor(private personService : PersonService) {
        super();
    }

    connect(): Observable<Person[]> {
        return this.load();
    }

    disconnect(): void {
    }

    load(): Observable<Person[]> {
        if (this.paginator == undefined) throw Error('Please set the paginator and sort on the data source before connecting.');
        return this.personService.fetch(this.paginator)
            .pipe(
                map(lazyData => {
                    this.length = lazyData.count;
                    this.data = lazyData.data;
                    return lazyData.data;
                })
            );
    }


}
