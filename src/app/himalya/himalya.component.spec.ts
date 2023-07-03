import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimalyaComponent } from './himalya.component';

describe('HimalyaComponent', () => {
  let component: HimalyaComponent;
  let fixture: ComponentFixture<HimalyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HimalyaComponent]
    });
    fixture = TestBed.createComponent(HimalyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
