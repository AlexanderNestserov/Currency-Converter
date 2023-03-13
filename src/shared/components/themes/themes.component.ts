import {Component} from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})

export class ThemesComponent {

  public stateOptions: any[];

  public value: string = "saga-blue";

  constructor(
    private _themeService: ThemeService,
  ) {
    this.stateOptions = [
      {label: 'Ciemny', value: 'md-dark-indigo'},
      {label: 'Jasny', value: 'saga-blue'},
    ];
  }

  public onChangeTheme(event: { originalEvent: PointerEvent, value: string }): void {
    this._themeService.switchTheme(event.value);
  }
}
