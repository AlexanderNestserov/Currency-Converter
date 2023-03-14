import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../shared/services/theme.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject<void>();
  constructor(
    private _themeService: ThemeService,
  ) {
  }

  public ngOnInit(): void {
    this._themeService.contrast
      .pipe(takeUntil(this._destroy$))
      .subscribe((el)=> this._themeService.accessibilityChange(!el));
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
