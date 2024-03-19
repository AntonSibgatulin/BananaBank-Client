import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSComponent } from './button-s.component';

describe('ButtonSComponent', () => {
  let component: ButtonSComponent;
  let fixture: ComponentFixture<ButtonSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
