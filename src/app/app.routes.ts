import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';



const ROUTE_APP: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];


 export const APP_ROUTING = RouterModule.forRoot(ROUTE_APP);
