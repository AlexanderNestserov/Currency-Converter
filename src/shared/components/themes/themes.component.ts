import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {FormBuilder} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})

export class ThemesComponent implements OnInit, OnDestroy{

  public stateOptions: any[];
  public value = this._fb.control('jasny');

  private _destroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _themeService: ThemeService,
  ) {
    this.stateOptions = [
      {label: 'Ciemny', value: 'ciemny'},
      {label: 'Jasny', value: 'jasny'},
    ];
  }

  public ngOnInit(): void {
    this.value.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((el)=> this._themeService.contrast.next(el === 'jasny'));
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
