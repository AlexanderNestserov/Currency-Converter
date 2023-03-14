import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "../shared/components/components.module";
import {InterceptorsModule} from "../shared/interceptor/interceptor.module";
import {DialogService} from "primeng/dynamicdialog";
import {DialogsModule} from "../shared/dialogs/dialogs.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    InterceptorsModule,
    DialogsModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
