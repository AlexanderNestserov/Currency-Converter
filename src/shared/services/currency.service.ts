import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrencyData} from "../models/currency.model";

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getCurrencies(): Observable<CurrencyData[]> {
    return this._http.get<CurrencyData[]>('https://api.nbp.pl/api/exchangerates/tables/A/?format=json')
  }

  public getDateCurrencies(date: string): Observable<CurrencyData[]> {
    return this._http.get<CurrencyData[]>(`http://api.nbp.pl/api/exchangerates/tables/A/${date}/?format=json`)
  }

}
