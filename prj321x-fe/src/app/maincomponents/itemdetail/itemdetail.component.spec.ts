import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailComponent } from './itemdetail.component';

describe('ItemdetailComponent', () => {
  let component: ItemdetailComponent;
  let fixture: ComponentFixture<ItemdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemdetailComponent]
    });
    fixture = TestBed.createComponent(ItemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
