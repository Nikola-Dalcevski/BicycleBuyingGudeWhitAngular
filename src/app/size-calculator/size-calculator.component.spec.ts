import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeCalculatorComponent } from './size-calculator.component';

describe('SizeCalculatorComponent', () => {
  let component: SizeCalculatorComponent;
  let fixture: ComponentFixture<SizeCalculatorComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
