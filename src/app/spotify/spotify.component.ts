import {Component, OnInit} from '@angular/core';
import {SpotifyService} from './spotify.service';
import {BreadcrumbService} from '../layout/app-breadcrumb/breadcrumb.service';
import {MenuItem} from 'primeng/api';
import {Users} from '../models/Users';
import {Router} from '@angular/router';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {

  slideItems: MenuItem[] = [];
  users: (Users | { displayName: string; id: string })[] = [];
  id: Users[] = [];
  countries: any = [];
  selectedUser: Users | undefined;

  private state: any;
  private code: any;

  constructor(private spotifyService: SpotifyService, private  breadcrumbService: BreadcrumbService, private router: Router) {

    this.breadcrumbService.setItems([
      {label: 'Spotify'},
      {label: 'Dashboard', routerLink: ['/spotify']}
    ]);
  }

  ngOnInit(): void {
    this.spotifyService.getAllUsers().subscribe((res: Users[]) => {
      this.users = res;
    });
    this.slideItems = [
      {
        label: 'Something',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus'
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-user-edit'
          }
        ]
      }
    ];


  }

  login(): void {
    window.location.href = 'https://us-central1-' + 'groupmood-60906' + '.cloudfunctions.net/redirect';
  }
  logout(): void {
    this.router.navigate(['spotify']).then( () => {
      this.spotifyService.signOutSpotify();
    });
  }

  getToken(): void {
    const params = (new URL(document.location.toString())).searchParams;
    this.code = params.get('code');
    this.state = params.get('state');
    this.spotifyService.spotifyLogin(this.code, this.state).subscribe();
    // this.spotifyService.getPlaylistById().subscribe();
  }

  getPlaylists(event: any): void {
    const id = event.option.id;

    this.spotifyService.getPlaylistById(id).subscribe();
  }
}
