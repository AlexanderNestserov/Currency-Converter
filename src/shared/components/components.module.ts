import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyTableComponent} from "./currency-table/currency-table.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ThemesComponent} from "./themes/themes.component";
import {SelectButtonModule} from "primeng/selectbutton";

const commonModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule,
  TableModule,
  ButtonModule,
  CalendarModule,
  PaginatorModule,
  SelectButtonModule,
];

const commonDeclarations = [
  CurrencyTableComponent,
  ThemesComponent,
];

@NgModule({
  imports: [
    ...commonModules,
  ],
  declarations: [...commonDeclarations],
  providers: [],
  exports: [...commonModules, ...commonDeclarations],
})
export class ComponentsModule {
}
