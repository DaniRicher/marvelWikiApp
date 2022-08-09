import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeadersAndParamsService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Accept':'*/*'
    });

    const params = new HttpParams()
        .set( 'apikey', 'b5abfa731f60e49555240eaf37f0297e' )
        .set( 'ts', '1' )
        .set( 'hash', 'c37d7ef24de8667beb42f6acd0cf41a4' )
    
    const reqClone = req.clone({
      headers,
      params
    });

    return next.handle( reqClone ).pipe(
      catchError( this.manejarError )
    );
  }

  manejarError( error: HttpErrorResponse ) {
    return throwError( () => {
      'Error'
    })
  }
}
