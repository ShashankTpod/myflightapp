import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import { RegistrationComponent } from 'src/app/authentication-module/registration/registration.component';
import { LoginComponent } from 'src/app/authentication-module/login/login.component';

const routes: Routes = [{ 
  
  path: 'search', component: SearchComponent,
},
 
{
  path: 'login', component: LoginComponent
},
{
  path: 'register', component: RegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
