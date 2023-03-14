import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor as Interceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse, HttpStatusCode,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements Interceptor {

  public intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            return throwError(() => error.statusText);
          }
          return throwError(error);
        }),
      );
  }

}
