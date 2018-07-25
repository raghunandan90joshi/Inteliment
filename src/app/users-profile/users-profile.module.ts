import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule} from '../app-routing.module';
import { MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
          MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule, MatSelectModule,
            MatTabsModule, MatGridListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UsersProfileComponent } from './users-profile.component';

@NgModule({
  imports: [
    CommonModule, HttpModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    RouterModule, AppRoutingModule, NoopAnimationsModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatToolbarModule, MatMenuModule, MatStepperModule, MatCheckboxModule, MatSidenavModule, MatDialogModule,
    MatSelectModule, MatTabsModule, MatGridListModule, FlexLayoutModule, StarRatingModule.forRoot(), Ng2Webstorage,
    BsDropdownModule.forRoot(), NgbDropdownModule
  ],
  declarations: [UsersProfileComponent],
  exports: [UsersProfileComponent],
  entryComponents: [
  ],
})
export class UsersProfileModule {

}

