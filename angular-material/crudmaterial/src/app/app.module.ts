
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './authentication-module/registration/registration.component';
import { LoginComponent } from './authentication-module/login/login.component';
import { MyMaterialModule } from  './material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    SearchComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/', pathMatch: 'full' },
    //   { path: 'register', component: RegistrationComponent },
    //   { path: 'login', component: LoginComponent },
       
     
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
