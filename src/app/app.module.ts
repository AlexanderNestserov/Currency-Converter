import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CurrencyService} from "../shared/services/currency.service";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "../shared/components/components.module";
import {ThemeService} from "../shared/services/theme.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [CurrencyService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
