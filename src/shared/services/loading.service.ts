import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private _loadingState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getValue(): Observable<boolean> {
    return this._loadingState.asObservable();
  }

  public changeLoadingState(isLoading: boolean): void {
    this._loadingState.next(isLoading);
  }

}
