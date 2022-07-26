import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminacionProductComponent } from './eliminacion-product.component';

describe('EliminacionProductComponent', () => {
  let component: EliminacionProductComponent;
  let fixture: ComponentFixture<EliminacionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminacionProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminacionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
