import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RideRequestComponent } from './ride-request/ride-request.component';
import { FormsModule } from '@angular/forms';
import { googleMapsAPIKey } from '../../api/googleMapsAPI';
import { AutocompleteGoogleDocComponent } from './autocomplete-google-doc/autocomplete-google-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    RideRequestComponent,
    AutocompleteGoogleDocComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: googleMapsAPIKey,
      libraries: ['places'],
    }),
    AgmDirectionModule,
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
})
export class AppModule {}
