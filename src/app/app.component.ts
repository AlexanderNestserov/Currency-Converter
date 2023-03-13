import {Component} from '@angular/core';
import {CurrencyService} from "../shared/services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private _currencyService: CurrencyService,
  ) {
  }

  public getExchangeRates(): void {
    this._currencyService.getCurrencies().subscribe((el) => {
      console.log(el);
    })
  }
}
