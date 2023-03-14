import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import {FailurePopupComponent} from "../dialogs/failure-popup/failure-popup.component";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private _injector: Injector,
    private _zone: NgZone,
  ) {
  }

  public handleError(error: Error | UncaughtPromiseError | HttpErrorResponse): void {
    if ('promise' in error && error?.promise && 'rejection' in error && error?.rejection) {
      error = error.rejection;
    }

    this._zone.run(() => {
      console.error('ErrorHandler', error);
      this._showMessage((error as HttpErrorResponse).statusText);
    });
  }

  private _showMessage(message: string): void {
    this._injector.get(DialogService).open(FailurePopupComponent, { showHeader: false, data: { message } });
  }

}
