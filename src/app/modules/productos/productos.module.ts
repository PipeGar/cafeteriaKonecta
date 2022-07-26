import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CreacionProductComponent } from './creacion-product/creacion-product.component';
import { ModificacionProductComponent } from './modificacion-product/modificacion-product.component';
import { EliminacionProductComponent } from './eliminacion-product/eliminacion-product.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';




@NgModule({
  declarations: [
    CreacionProductComponent,
    ModificacionProductComponent,
    EliminacionProductComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    
  ]
})
export class ProductosModule { }
