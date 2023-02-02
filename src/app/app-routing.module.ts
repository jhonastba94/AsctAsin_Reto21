import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { HeaderComponent } from './principal/header/header.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';

const routes: Routes = [

{path: 'home', component: HomeComponent, canActivate: [CanactivateGuard]},
{path: 'home', component: HeaderComponent},

{path: '', component: LoginComponent },
{path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
