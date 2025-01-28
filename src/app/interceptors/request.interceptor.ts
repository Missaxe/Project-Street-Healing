import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class requestInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith(environment.apiUrl);
    console.log('Hey');
    console.log(isApiRequest);

    if (isApiRequest) {
      request = request.clone({
        headers: request.headers.append('XApiKey', environment.XApiKey),
      });
    }
    console.log(request);

    return next.handle(request);
  }
}
