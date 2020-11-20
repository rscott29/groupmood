import {Component} from '@angular/core';
import {AppMainComponent} from '../app-main/app-main.component';

@Component({
  selector: 'app-rightpanel',
  template: `
    <div class="layout-rightpanel" (click)="app.onRightPanelClick($event)">
      <div class="right-panel-header">
        <div class="title">
          <span>Today</span>
          <h1>Wednesday, 26 Jun</h1>
        </div>
        <a href="#" class="rightpanel-exit-button" (click)="app.onRightPanelClose($event)">
          <i class="pi pi-times"></i>
        </a>
      </div>
      <div class="right-panel-content">
        <div class="right-panel-content-row">
          <div class="tasks">
            <div class="tasks-header">
              <div class="title">
                <h1>Tasks</h1>
              </div>
              <div class="tasks-info">
                <span>You have</span><span class="highlighted"> 2 tasks</span><span> today</span>
              </div>
            </div>
            <ul class="tasks-list">
              <li class="tasks-list-item">
                <div class="checkbox">
                  <p-checkbox [binary] = 'true'></p-checkbox>
                  <p>Sales Report</p>
                </div>
                <div class="tasks-day">
                  <span class="time">Today</span>
                </div>
              </li>

              <li class="tasks-list-item">
                <div class="checkbox">
                  <p-checkbox [binary] = 'true'></p-checkbox>
                  <p>Pay Invoices</p>
                </div>
                <div class="tasks-day">
                  <span class="time">Today</span>
                </div>
              </li>

              <li class="tasks-list-item">
                <div class="checkbox">
                  <p-checkbox [binary] = 'true'></p-checkbox>
                  <p>Customer Meeting</p>
                </div>
                <div class="tasks-day">
                  <span class="time later">Later</span>
                </div>
              </li>

              <li class="tasks-list-item">
                <div class="checkbox">
                  <p-checkbox [binary] = 'true'></p-checkbox>
                  <p>Expense Reports</p>
                </div>
                <div class="tasks-day">
                  <span class="time later">Later</span>
                </div>
              </li>
              <li class="tasks-list-item">
                <div class="checkbox">
                  <p-checkbox [binary] = 'true'></p-checkbox>
                  <p>Plane Tickets</p>
                </div>
                <div class="tasks-day">
                  <span class="time later">Later</span>
                </div>
              </li>
              <li class="tasks-list-item">
                <div class="checkbox">
                  <p-checkbox [binary] = 'true'></p-checkbox>
                  <p>Dinner with Tony</p>
                </div>
                <div class="tasks-day">
                  <span class="time later">Later</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-panel-content-row">
          <div class="calendar">
            <h1>Calendar</h1>
            <p-calendar [inline]="true"></p-calendar>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app-rightpanel.component.scss']
})
export class AppRightpanelComponent {

  constructor(public app: AppMainComponent) {
  }


}
