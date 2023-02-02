import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ]
})
export class PrincipalModule { }
