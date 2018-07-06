import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VidCarouselComponent } from './vid-carousel/vid-carousel.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { DropdownModule, WavesModule } from 'ng-uikit-pro-standard';
import { SkinComponent } from './skin/skin.component';
import {Routes, RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {path: 'home', component: ContentComponent},
  {path: 'test', component: TestComponent},
  {path: 'register', component: SignupComponent},
  {path: 'dashboard', component: MainDashboardComponent},
  {path: '', component: ContentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    VidCarouselComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    MainDashboardComponent,
    LoaderComponent,
    SkinComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    DropdownModule,
    WavesModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
