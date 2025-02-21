import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckerComponent } from './fucker.component';

describe('FuckerComponent', () => {
  let component: FuckerComponent;
  let fixture: ComponentFixture<FuckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
