import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageproductComponent } from './singlepageproduct.component';

describe('SinglepageproductComponent', () => {
  let component: SinglepageproductComponent;
  let fixture: ComponentFixture<SinglepageproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglepageproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepageproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
