import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireFunctions} from '@angular/fire/functions';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Users} from '../models/Users';
import {CurrentUser} from '../models/CurrentUser';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  uid: string | undefined = '';
  query: Observable<any> = new Observable<any>();
  token: CurrentUser[] = [];
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

  getPlaylistById(id: string): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/users/${id}/playlists`);
  }

  getAllUsers(): Observable<Users[]> {
    return this.db.list<Users>('spotifyUser').valueChanges();
  }
   signOutSpotify(): void {
     this.fbAuth.signOut();
     window.location.href = 'https://accounts.spotify.com/en/status';
   }
  getCurrentAccessToken(): Observable<any> {

    this.fbAuth.authState.subscribe(res => {
      this.uid = res?.uid;

      this.query = this.db.object(`spotifyUser/${this.uid}`).valueChanges()
        .pipe(
          map((response: CurrentUser) => response.token) as any
        );
    });
    return this.query;
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
