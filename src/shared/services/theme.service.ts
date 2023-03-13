import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private _document: Document,
  ) {
  }

  public switchTheme(theme: string): void {
    let themeLink = this._document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

}