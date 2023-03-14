import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FailurePopupComponent} from "./failure-popup/failure-popup.component";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {ButtonModule} from "primeng/button";

const commonModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  RouterModule,
  DynamicDialogModule,
  ButtonModule,
];

const commonDeclarations = [
  FailurePopupComponent,
];

@NgModule({
  imports: [...commonModules],
  declarations: [...commonDeclarations],
  providers: [],
  exports: [...commonModules, ...commonDeclarations],
})
export class DialogsModule {
}
