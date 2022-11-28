import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {PassageComponent} from "./components/passage/passage.component";
import {ChipCardComponent} from "./components/chip-card/chip-card.component";
import {GatewayComponent} from "./components/gateway/gateway.component";
import {PersonComponent} from "./components/person/person.component";

const routes: Routes = [
    {path: "passage", component: PassageComponent},
    {path: "chip-card", component: ChipCardComponent},
    {path: "gateway", component: GatewayComponent},
    {path: "people", component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
