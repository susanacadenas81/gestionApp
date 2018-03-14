import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';
const routes: Routes = [
{path: '',component:HomepageComponent},
{path: 'homepage',component:HomepageComponent},
{path:'registrar-cliente',component:RegistrarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
