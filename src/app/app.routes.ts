import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

import { contentAreaComponent } from './contentArea/app.contentAreacomponent';

import { XyzComponent } from './xyz/xyz.component';
import { LoginComponent } from './login/components/login.component';
import { RegistrazioneComponent } from './registrazione/components/registrazione.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'login', component: LoginComponent },
    {path : 'logout', component: LogoutComponent},
    {path : 'registrazione', component: RegistrazioneComponent}
];