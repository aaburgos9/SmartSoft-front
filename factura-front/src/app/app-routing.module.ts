import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FacturaComponent } from './factura/factura.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component:  FacturaComponent
  },
  {
    path: 'agregarCliente',
    component: ClienteComponent
  },
  {
    path: 'agregarProdcuto',
    component: ProductoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
