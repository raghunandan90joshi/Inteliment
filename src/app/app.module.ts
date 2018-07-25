import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, NG_VALIDATORS, FormsModule, FormGroup, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { LoginPageModule } from './login_page/login_page.module';
import { RegisterModule} from './register/register.module';
import { UsersProfileModule } from './users-profile/users-profile.module';

import { HomeModule} from './home/home.module';
import { SharedModule} from './shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2Webstorage } from 'ngx-webstorage';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
          MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
          MatTabsModule, MatGridListModule } from '@angular/material';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, AppRoutingModule, Ng2Webstorage, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, NoopAnimationsModule,
    HttpClientModule, HttpModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule, MatTabsModule, SidebarModule.forRoot(),
    MatGridListModule, LoginPageModule, RegisterModule, HomeModule, SharedModule, UsersProfileModule, BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
