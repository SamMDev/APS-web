import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {PassageComponent} from "./passage/passage.component";
import {ChipCardComponent} from "./chip-card/chip-card.component";
import {GatewayComponent} from "./gateway/gateway.component";

const routes: Routes = [
    {path: "passage", component: PassageComponent},
    {path: "chip-card", component: ChipCardComponent},
    {path: "gateway", component: GatewayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
