import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycardComponent } from './countrycard.component';

describe('CountrycardComponent', () => {
  let component: CountrycardComponent;
  let fixture: ComponentFixture<CountrycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
