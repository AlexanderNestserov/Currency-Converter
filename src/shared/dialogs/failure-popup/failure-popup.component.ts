import {Component} from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {CurrencyService} from "../../services/currency.service";

@Component({
  templateUrl: './failure-popup.component.html',
  styleUrls: ['./failure-popup.component.scss'],
})
export class FailurePopupComponent {

  constructor(
    private _currencyService: CurrencyService,
    private _ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) {
  }
  public onClose(value: boolean): void {
    this._ref.close(value);
    this._currencyService.closeDialogError.next({value, message: this.config.data.message});
  }

}
