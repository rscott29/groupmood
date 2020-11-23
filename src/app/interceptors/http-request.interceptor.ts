import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent} from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import {SpotifyService} from '../spotify/spotify.service';


/**
 * Automatically injects the Authorization token for API calls to our backend
 *
 */
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private spotifyService: SpotifyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      return this.addAuth(request).pipe(switchMap(x => next.handle(x)));
  }

  private addAuth(original: HttpRequest<any>): Observable<HttpRequest<any>> {
    return from(this.spotifyService.getCurrentAccessToken()).pipe(
      map(token => {
        const req = original.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
        return req;
      })
    );
  }
}












