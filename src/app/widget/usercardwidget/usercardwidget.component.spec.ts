import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardwidgetComponent } from './usercardwidget.component';

describe('UsercardwidgetComponent', () => {
  let component: UsercardwidgetComponent;
  let fixture: ComponentFixture<UsercardwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercardwidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercardwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
