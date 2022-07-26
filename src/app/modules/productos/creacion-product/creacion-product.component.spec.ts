import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionProductComponent } from './creacion-product.component';

describe('CreacionProductComponent', () => {
  let component: CreacionProductComponent;
  let fixture: ComponentFixture<CreacionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
