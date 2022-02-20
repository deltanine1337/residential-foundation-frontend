import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictListComponent } from './components/district/district-list/district-list.component';
import { HouseListComponent } from './components/house/house-list/house-list.component';
import { TenantListComponent } from './components/tenant/tenant-list/tenant-list.component';
import { HttpClientModule } from "@angular/common/http";
import { DistrictModalComponent } from './components/district/district-modal/district-modal.component';
import { HouseModalComponent } from './components/house/house-modal/house-modal.component';
import { TenantModalComponent } from './components/tenant/tenant-modal/tenant-modal.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import {TokenStorageService} from "./services/token-storage.service";



@NgModule({
  declarations: [
    AppComponent,
    DistrictListComponent,
    HouseListComponent,
    TenantListComponent,
    DistrictModalComponent,
    HouseModalComponent,
    TenantModalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    NgSelectModule
  ],
  providers: [authInterceptorProviders, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
