import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {BreadcrumbService} from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './app-breadcrumb.component.html',
  styleUrls: ['./app-breadcrumb.component.scss']
})
export class AppBreadcrumbComponent implements OnDestroy {


  subscription: Subscription | undefined;

  items: MenuItem[] = [];

  constructor(public breadcrumbService: BreadcrumbService) {

    this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
      this.items = response;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
