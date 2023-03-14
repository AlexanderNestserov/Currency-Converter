import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UrlInterceptor implements HttpInterceptor {
  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    let url = req.clone({
      ...req,
      url: environment.apiUrl + req.url,
    });

    return next.handle(url);
  }
}
