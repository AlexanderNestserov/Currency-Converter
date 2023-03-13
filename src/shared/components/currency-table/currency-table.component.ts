import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {CurrencyData, CurrencyRates} from "../../models/currency.model";
import {FormBuilder} from "@angular/forms";
import {Table} from "primeng/table";
import {Subject} from "rxjs";
import * as moment from 'moment';
import {debounceTime, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})

export class CurrencyTableComponent implements OnInit, OnDestroy {


  public allCurrencies: CurrencyRates[] = [];
  public fromDate = this._fb.control(new Date());
  public labelHeaders: { label: string, value: string }[] = [
    {label: 'Symbol waluty', value: 'code'},
    {label: 'Waluta', value: 'currency'},
    {label: 'Kurs Waluty', value: 'mid'},
  ];

  @ViewChild(Table, {static: false})
  private _table: Table | undefined;
  private _destroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _currencyService: CurrencyService,
  ) {
  }

  public ngOnInit(): void {
    this._currencyService.getCurrencies()
      .subscribe((res: CurrencyData[]) => this.allCurrencies = res[0].rates);
    this._subscribeOnDateChanges();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public onSortChange(event: { field: string, order: number }): void {
    if (event.order > 0) {
      this.allCurrencies = this.allCurrencies.sort((a, b) => {
        if (event.field === 'code') {
          return a.code.localeCompare(b.code);
        } else if (event.field === 'currency') {
          return a.currency.localeCompare(b.currency);
        } else {
          return a.mid - b.mid;
        }
      })
      return;
    }
    this.allCurrencies = this.allCurrencies.sort((a, b) => {
      if (event.field === 'code') {
        return b.code.localeCompare(a.code);
      } else if (event.field === 'currency') {
        return b.currency.localeCompare(a.currency);
      } else {
        return b.mid - a.mid;
      }
    })
  }

  public getDateFromDate(date: string): void {
    this._currencyService.getDateCurrencies(date)
      .subscribe((res: CurrencyData[]) => this.allCurrencies = res[0].rates);
  }

  public onClearSort(): void {
    this._table && this._table.reset();
  }

  private _subscribeOnDateChanges(): void {
    this.fromDate.valueChanges
      .pipe(debounceTime(400), takeUntil(this._destroy$))
      .subscribe((el) => el && this.getDateFromDate(moment(el.toString()).format('yyyy-MM-DD')));
  }

}
