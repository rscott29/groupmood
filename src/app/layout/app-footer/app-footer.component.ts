import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
        <div class="layout-footer">
			<div class="logo-text">
				<img src="../../../assets/images/groupmood.png" alt="group mood" />
				<div class="text">
					<span>Just for the fun of it</span>
				</div>
			</div>
			<div class="icons">
				<div class="icon icon-hastag">
					<i class="pi pi-home"></i>
				</div>
				<div class="icon icon-twitter">
					<i class="pi pi-globe"></i>
				</div>
				<div class="icon icon-prime">
					<i class="pi pi-bookmark"></i>
				</div>
			</div>
        </div>
    `,
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
