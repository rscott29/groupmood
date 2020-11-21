import {Component, OnInit} from '@angular/core';
import {SpotifyService} from './spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {

  private state: any;
  private code: any;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  login(): void {
    window.location.href = 'https://us-central1-' + 'groupmood-60906' + '.cloudfunctions.net/redirect';
  }

  getToken(): void {
    const params = (new URL(document.location.toString())).searchParams;
    this.code = params.get('code');
    this.state = params.get('state');
    this.spotifyService.spotifyLogin(this.code, this.state).subscribe();
    this.spotifyService.getPlaylistById().subscribe();
  }

}
