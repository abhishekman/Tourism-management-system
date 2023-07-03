import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlouraComponent } from './floura.component';

describe('FlouraComponent', () => {
  let component: FlouraComponent;
  let fixture: ComponentFixture<FlouraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlouraComponent]
    });
    fixture = TestBed.createComponent(FlouraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
