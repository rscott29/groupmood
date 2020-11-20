import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRightpanelComponent } from './app-rightpanel.component';

describe('AppRightpanelComponent', () => {
  let component: AppRightpanelComponent;
  let fixture: ComponentFixture<AppRightpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRightpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRightpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
