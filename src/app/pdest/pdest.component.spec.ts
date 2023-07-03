import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdestComponent } from './pdest.component';

describe('PdestComponent', () => {
  let component: PdestComponent;
  let fixture: ComponentFixture<PdestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdestComponent]
    });
    fixture = TestBed.createComponent(PdestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
