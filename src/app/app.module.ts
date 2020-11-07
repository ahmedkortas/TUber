import { BrowserModule } from '@angular/platform-browser';
import { ResetComponentComponent } from './reset-component/reset-component.component';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //import this in the app module !!!important
import { apiKey, authDomain, projectId, storageBucket } from '../firebase';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    ResetComponentComponent,
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: apiKey,
      authDomain: authDomain,
      projectId: projectId,
      storageBucket: storageBucket,
    }),
    AngularFireStorageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
