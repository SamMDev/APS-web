import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PassageComponent } from './components/passage/passage.component';
import { PassageDataTableComponent } from './table/passage-data-table/passage-data-table.component';
import {HttpClientModule} from "@angular/common/http";
import {PassageDataTableDataSource} from "./table/passage-data-table/passage-data-table-datasource";
import { ChipCardTableComponent } from './table/chip-card-table/chip-card-table.component';
import {ChipCardTableDataSource} from "./table/chip-card-table/chip-card-table-datasource";
import { ChipCardComponent } from './components/chip-card/chip-card.component';
import { GatewayComponent } from './components/gateway/gateway.component';
import { GatewayTableComponent } from './table/gateway-table/gateway-table.component';
import {GatewayTableDataSource} from "./table/gateway-table/gateway-table-datasource";
import { PersonTableComponent } from './table/person-table/person-table.component';
import {PersonTableDataSource} from "./table/person-table/person-table-datasource";
import { PersonComponent } from './components/person/person.component';
import { PassageDetailComponent } from './components/passage-detail/passage-detail.component';
import { ChipCardDetailComponent } from './components/chip-card-detail/chip-card-detail.component';
import { PassageForChipCardComponent } from './table/passage-for-chip-card/passage-for-chip-card.component';
import {PassageForChipCardDataSource} from "./table/passage-for-chip-card/passage-for-chip-card-datasource";
import { PassageForGatewayTableComponent } from './table/passage-for-gateway-table/passage-for-gateway-table.component';
import {PassageForGateway} from "./model/passage/PassageForGateway";
import {PassageForGatewayTableDataSource} from "./table/passage-for-gateway-table/passage-for-gateway-table-datasource";
import { GatewayDetailComponent } from './components/gateway-detail/gateway-detail.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassageComponent,
    PassageDataTableComponent,
    ChipCardTableComponent,
    ChipCardComponent,
    GatewayComponent,
    GatewayTableComponent,
    PersonTableComponent,
    PersonComponent,
    PassageDetailComponent,
    ChipCardDetailComponent,
    PassageForChipCardComponent,
    PassageForGatewayTableComponent,
    GatewayDetailComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
      PassageDataTableDataSource,
      ChipCardTableDataSource,
      GatewayTableDataSource,
      PersonTableDataSource,
      PassageForChipCardDataSource,
      PassageForGateway,
      PassageForGatewayTableDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
