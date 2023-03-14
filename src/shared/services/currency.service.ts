import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CurrencyData, ErrorMessage} from "../models/currency.model";

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  public closeDialogError = new BehaviorSubject<ErrorMessage>({message: '', value: false});

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getCurrencies(): Observable<CurrencyData[]> {
    return this._http.get<CurrencyData[]>('?format=json')
  }

  public getDateCurrencies(date: string): Observable<CurrencyData[]> {
    return this._http.get<CurrencyData[]>(`${date}/?format=json`)
  }

}
