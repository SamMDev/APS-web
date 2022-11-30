import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {PassageComponent} from "./components/passage/passage.component";
import {ChipCardComponent} from "./components/chip-card/chip-card.component";
import {GatewayComponent} from "./components/gateway/gateway.component";
import {PersonComponent} from "./components/person/person.component";
import {PassageDetailComponent} from "./components/passage-detail/passage-detail.component";
import {ChipCardDetailComponent} from "./components/chip-card-detail/chip-card-detail.component";
import {GatewayDetailComponent} from "./components/gateway-detail/gateway-detail.component";
import {PersonDetailComponent} from "./components/person-detail/person-detail.component";

const routes: Routes = [
    {path: "passage", component: PassageComponent},
    {path: "chip-card", component: ChipCardComponent},
    {path: "gateway", component: GatewayComponent},
    {path: "people", component: PersonComponent},
    {path: "passage/:id", component: PassageDetailComponent},
    {path: "chip-card/:id", component: ChipCardDetailComponent},
    {path: "gateway/:id", component: GatewayDetailComponent},
    {path: "people/:id", component: PersonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
