import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionRegisterComponent } from './pension-register.component';

describe('PensionRegisterComponent', () => {
  let component: PensionRegisterComponent;
  let fixture: ComponentFixture<PensionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
