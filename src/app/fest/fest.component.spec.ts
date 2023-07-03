import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestComponent } from './fest.component';

describe('FestComponent', () => {
  let component: FestComponent;
  let fixture: ComponentFixture<FestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestComponent]
    });
    fixture = TestBed.createComponent(FestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
