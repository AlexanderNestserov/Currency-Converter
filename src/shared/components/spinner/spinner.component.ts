import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {

  public isLoading$?: Observable<boolean>;

  constructor(
    private _loadingService: LoadingService,
  ) {
  }

  public ngOnInit(): void {
    this.isLoading$ = this._loadingService.getValue();
  }

}
