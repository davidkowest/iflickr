import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { AgregarComponent } from './imagenes/agregar/agregar.component';
import { DetallesComponent } from './imagenes/detalles/detalles.component';
import { ListaComponent } from './imagenes/lista/lista.component';


const routes: Routes = [
  { path: 'registro', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'home', component: HomeComponent},
  { path: 'agregar', component: AgregarComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'detalles/:id', component: DetallesComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
