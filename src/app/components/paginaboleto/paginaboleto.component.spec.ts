import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaboletoComponent } from './paginaboleto.component';

describe('PaginaboletoComponent', () => {
  let component: PaginaboletoComponent;
  let fixture: ComponentFixture<PaginaboletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaboletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
