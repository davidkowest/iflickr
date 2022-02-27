
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {ApiDataService } from './services/api-data.service';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from './components/crud/crud.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AgregarComponent } from './imagenes/agregar/agregar.component';
import { DetallesComponent } from './imagenes/detalles/detalles.component';
import { ListaComponent } from './imagenes/lista/lista.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    CrudComponent,
    AgregarComponent,
    DetallesComponent,
    ListaComponent,
    Navbar2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
    FormsModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
