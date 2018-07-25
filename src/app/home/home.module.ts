import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule, NG_VALIDATORS, FormsModule, FormGroup, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../app-routing.module';
import { Ng2Webstorage } from 'ngx-webstorage';
import { MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
         MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
          MatTabsModule, MatGridListModule } from '@angular/material';


import { HomeComponent } from './home.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],

  imports: [
    BrowserModule, AppRoutingModule, Ng2Webstorage, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, NoopAnimationsModule,
    HttpClientModule, HttpModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
    MatTabsModule, MatGridListModule, NgbDropdownModule, BsDropdownModule.forRoot(),
  ],
  providers: [],
})
export class HomeModule { }
