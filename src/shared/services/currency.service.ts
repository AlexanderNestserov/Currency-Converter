import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  private readonly _FAQ_URL = '/core/faq/';

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getCurrencies(): Observable<any> {
    return this._http.get<any>('https://api.exchangerate-api.com/v4/latest/PLN')
  }

}
