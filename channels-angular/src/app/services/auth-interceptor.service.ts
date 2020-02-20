import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sImZpbGVzQ3JlYXRlZCI6W10sInVzZXJuYW1lIjoidW5pcWNhc3RlciIsImVtYWlsIjoidW5pcWNhc3RlckB1bmljYXN0LmNvbSIsImxhbmciOiJlbl9VUyIsInRlbXBsYXRlIjoiZGVmYXVsdCIsImlkX3JlZiI6IjEiLCJwcm92aWRlciI6ImxvY2FsIiwicGFzc3dvcmQiOiIkMmEkMTAkNmFxYW1XaEdQT3ZINnRPWUludTZwdUZUQkJQZGhTRDlpejdXR1BvaTlWUUthSFdJelM2NWkiLCJpZCI6MSwiY3JlYXRlZEF0IjoiMjAxNy0wMy0zMFQxNDozNTowNC44MTVaIiwidXBkYXRlZEF0IjoiMjAxNy0wMy0zMFQxNDozNTowNC44NjVaIiwiaWF0IjoxNDkwODkzNTI4fQ.3eA_iwYHUEPeVYmARhC5ECOkYyB5cXFmsDdn_iI2z9M')
    });
    return next.handle(authReq);
  }

}
