import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {PassageComponent} from "./passage/passage.component";

const routes: Routes = [
  {path: "passage", component: PassageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
