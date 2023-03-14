import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  public contrast: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private _renderer: Renderer2;

  constructor(
    private _rendererFactory: RendererFactory2,
  ) {
    this._renderer = _rendererFactory.createRenderer(null, null);
  }

  public accessibilityChange(dark: boolean): void {
    dark ? this._renderer.setAttribute(document.body, 'darkTheme', 'true') :
      this._renderer.removeAttribute(document.body, 'darkTheme');
  }

  public getPropertyValue(param: string): string {
    return getComputedStyle(document.body).getPropertyValue(param);
  }
}
