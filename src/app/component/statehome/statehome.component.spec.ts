import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatehomeComponent } from './statehome.component';

describe('StatehomeComponent', () => {
  let component: StatehomeComponent;
  let fixture: ComponentFixture<StatehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
