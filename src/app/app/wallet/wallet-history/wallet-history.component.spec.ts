import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletHistoryComponent } from './wallet-history.component';

describe('WalletHistoryComponent', () => {
  let component: WalletHistoryComponent;
  let fixture: ComponentFixture<WalletHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalletHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
