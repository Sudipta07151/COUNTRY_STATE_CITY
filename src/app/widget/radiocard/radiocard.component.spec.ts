import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiocardComponent } from './radiocard.component';

describe('RadiocardComponent', () => {
  let component: RadiocardComponent;
  let fixture: ComponentFixture<RadiocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiocardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
