import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule, NG_VALIDATORS, FormsModule, FormGroup, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SidebarModule } from 'ng-sidebar';


import { AppRoutingModule } from '../app-routing.module';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
  MatTabsModule, MatGridListModule } from '@angular/material';
import { LoginpageComponent } from './login_page.component';

@NgModule({
  declarations: [LoginpageComponent],
  exports: [LoginpageComponent],
  imports: [
    BrowserModule, AppRoutingModule, Ng2Webstorage, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, NoopAnimationsModule,
    HttpClientModule, HttpModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule, SidebarModule.forRoot(),
    MatTabsModule, MatGridListModule
  ],
  providers: [AuthenticationService],
})
export class LoginPageModule { }
