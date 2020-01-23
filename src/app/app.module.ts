import { AppRoutes } from './app.routes';
import { LoginService } from './login/services/login.service';
import { CoursesService } from './courses.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

import { contentAreaComponent } from './contentArea/app.contentAreacomponent';

import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/components/login.component';
import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { RegistrazioneService } from './registrazione/services/registrazione.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    //CourseComponent,
    contentAreaComponent,
    LoginComponent,
    RegistrazioneComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
    ],
  providers: [
    CoursesService, // We provide CoursesService as providers modules
    LoginService,
    RegistrazioneService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
