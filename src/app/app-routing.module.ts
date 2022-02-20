import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DistrictListComponent} from "./components/district/district-list/district-list.component";
import {HouseListComponent} from "./components/house/house-list/house-list.component";
import {TenantListComponent} from "./components/tenant/tenant-list/tenant-list.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";

const routes: Routes = [
  { path: 'district', component: DistrictListComponent },
  { path: 'house', component: HouseListComponent },
  { path: 'tenant', component: TenantListComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "**", redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
