import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';


const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'security',
    loadChildren: () => import ('./modules/security/security.module').then(m =>m.SecurityModule)
  },
  {
    path: 'customers',
    loadChildren: () => import ('./modules/customers/customers.module').then(m =>m.CustomersModule)
  },
  {
    path: 'productos',
    loadChildren: () => import ('./modules/productos/productos.module').then(m =>m.ProductosModule)
  },
  

  
  {
    path: '**',
    redirectTo: '/home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
