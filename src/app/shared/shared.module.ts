import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {ReactiveFormsModule, NG_VALIDATORS, FormsModule, FormGroup, FormControl, ValidatorFn, Validator} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from '../app-routing.module';
import {Ng2Webstorage} from 'ngx-webstorage';
import {AuthenticationService} from './services/authentication/authentication.service';
import {RegisterService} from './services/register/register.service';
import {UsersService} from './services/users/users.service';

import {
  MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
  MatTabsModule, MatGridListModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule, AppRoutingModule, Ng2Webstorage, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, NoopAnimationsModule,
    HttpClientModule, HttpModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
    MatTabsModule, MatGridListModule,
  ],
  providers: [AuthenticationService, RegisterService, UsersService],

})
export class SharedModule {
}
