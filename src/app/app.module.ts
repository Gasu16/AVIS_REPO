import { AppRoutes } from './app.routes';
import { LoginService } from './login/services/login.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { contentAreaComponent } from './contentArea/app.contentAreacomponent';

import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/components/login.component';
import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { RegistrazioneService } from './registrazione/services/registrazione.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientService } from './services/http-client.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { EmployeeModule } from './employee/employee.module';
import { PostloginComponent } from './postlogin/postlogin.component';
import { PostloginService } from './postlogin.service';
import { HttpinterceptorService } from './httpinterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    contentAreaComponent,
    LoginComponent,
    RegistrazioneComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    UserDetailsComponent,
    MenuComponent,
    PostloginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //HttpClient,
    FormsModule,
    EmployeeModule,
    RouterModule.forRoot(AppRoutes)
    ],
  providers: [
    LoginService,
    RegistrazioneService,
    AuthenticationService,
    HttpClientService,
    PostloginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
