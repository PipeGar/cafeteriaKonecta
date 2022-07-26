import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionProductComponent } from './modificacion-product.component';

describe('ModificacionProductComponent', () => {
  let component: ModificacionProductComponent;
  let fixture: ComponentFixture<ModificacionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
