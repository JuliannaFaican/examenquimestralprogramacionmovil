import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaboletoComponent } from './components/paginaboleto/paginaboleto.component';
import { PaginaprincipalComponent } from './components/paginaprincipal/paginaprincipal.component';


const routes: Routes = [
  {
    path:'', component:PaginaprincipalComponent
  },
  {
    path:'web1', component: PaginaboletoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
