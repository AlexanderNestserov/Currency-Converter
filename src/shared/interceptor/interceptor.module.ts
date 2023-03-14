import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {ErrorInterceptor} from "./error-interceptor";
import {UrlInterceptor} from "./url-interceptor";
import {GlobalErrorHandler} from "./error-handler";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class InterceptorsModule {
}
