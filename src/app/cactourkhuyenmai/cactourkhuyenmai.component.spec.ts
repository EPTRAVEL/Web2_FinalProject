import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactourkhuyenmaiComponent } from './cactourkhuyenmai.component';

describe('CactourkhuyenmaiComponent', () => {
  let component: CactourkhuyenmaiComponent;
  let fixture: ComponentFixture<CactourkhuyenmaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CactourkhuyenmaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CactourkhuyenmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
