import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { contentAreaComponent } from './contentArea/app.contentAreacomponent';

import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/components/login.component';
import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PostloginComponent } from './postlogin/postlogin.component';

export const AppRoutes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'login', component: LoginComponent },
    {path : 'logout', component: LogoutComponent},
    {path : 'registrazione', component: RegistrazioneComponent},
    {path : 'postlogin', component: PostloginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }