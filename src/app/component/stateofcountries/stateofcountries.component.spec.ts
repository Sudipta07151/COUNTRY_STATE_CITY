import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateofcountriesComponent } from './stateofcountries.component';

describe('StateofcountriesComponent', () => {
  let component: StateofcountriesComponent;
  let fixture: ComponentFixture<StateofcountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateofcountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateofcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
