import { Component, OnInit } from '@angular/core';
import {PersonDetail} from "../../model/person/PersonDetail";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../service/person/person.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

    personDetail !: PersonDetail;

    constructor(private activeRoute: ActivatedRoute, private personService : PersonService) {
        this.activeRoute.params.subscribe(params => this.onRouteChange(params));
    }

    ngOnInit(): void {
    }

    private onRouteChange(params: any): void {
        if (!params.id) return;
        this.personService.getDetail(params.id).subscribe(detail => this.personDetail = detail);
    }

}
