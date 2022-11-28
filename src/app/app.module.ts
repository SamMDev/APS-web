import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PassageComponent } from './passage/passage.component';
import { PassageDataTableComponent } from './passage-data-table/passage-data-table.component';
import {HttpClientModule} from "@angular/common/http";
import {PassageDataTableDataSource} from "./passage-data-table/passage-data-table-datasource";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassageComponent,
    PassageDataTableComponent
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
      PassageDataTableDataSource
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
