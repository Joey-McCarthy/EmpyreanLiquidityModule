import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService }  from './services/authguard/authguard.service';

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'index', component: HomeComponent,canActivate: [AuthguardService],
    children: [
        { path: 'account', component: AccountComponent,canActivate: [AuthguardService] },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
      ] },

    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);  