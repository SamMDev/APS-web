import { Component, OnInit } from '@angular/core';
import {Passage} from "../model/passage/passage";

const data: Passage[] = [
    {passageId: 1, time: new Date(), gatewayCode: "empty", gatewayName: "emptyName", personName: "Samuel"}
]

@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.css']
})
export class PassageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
