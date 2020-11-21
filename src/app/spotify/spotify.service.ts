import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireFunctions} from '@angular/fire/functions';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
    private fbFunction: AngularFireFunctions,
    private db: AngularFireDatabase,
    private fbAuth: AngularFireAuth) {
  }

  spotifyLogin(code: any, state: any): any {

    let url = 'https://us-central1-' + 'groupmood-60906' + '.cloudfunctions.net/token';
    url +=
      '?code=' + encodeURIComponent(code) +
      '&state=' + encodeURIComponent(state);

    return this.http.jsonp(url, 'callback').pipe(
      map((data: any) => {
        this.tokenReceived(data.token);
      })
    );
  }

  getUserCredentials(): Observable<any> {
    return this.db.object('spotifyAccessToken').valueChanges().pipe(map( (res: any) => {
        return Object.values(res).toString();
    }));
  }

  getPlaylistById(): Observable<any> {
    return this.http.get('https://api.spotify.com/v1/playlists/7MBnD1OTuCW2J8fOmYDL9E/tracks');
  }


  private tokenReceived(data: any): void {
    if (data) {
      this.fbAuth.signInWithCustomToken(data).then(() => {
        // TODO: Pass to proper message logging service
        console.log('sign in successful');
      });
      // TODO: Map this to a usable object;
      this.fbAuth.authState.subscribe(res => console.log(res));
    } else {
      console.error(data);
    }
  }
}
