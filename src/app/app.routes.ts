import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { MarketplaceComponent } from './marketplace.component';
import { ElearningComponent } from './elearning.component';
import { GovtSchemesComponent } from './govt-schemes.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'marketplace', component: MarketplaceComponent },

  { path: 'elearning', component: ElearningComponent },

  { path: 'govt', component: GovtSchemesComponent }

];