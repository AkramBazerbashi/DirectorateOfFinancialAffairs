import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TBLShamelUserListComponent } from './SystemServices/components/user/tblshamel-user-list/tblshamel-user-list.component';
import { TBLShamelUserEditComponent } from './SystemServices/components/user/tblshamel-user-edit/tblshamel-user-edit.component';
import { TBLShamelPrivilagesComponent } from './SystemServices/components/user/tblshamel-privilages/tblshamel-privilages.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuardServiceService } from './Global/auth-guard-service.service';
import { AuthServiceService } from './Global/auth-service.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SharedModule } from './modules/shared/shared.module';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './modules/shared/models/employees_department/MY_DATE_FORMATS';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatInputModule} from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatListModule} from '@angular/material/list'; 
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { LoginComponent } from './SystemServices/components/user/login/login.component';
import { EmployeesDepartmentComponent } from './componenets/employees-department/employees-department.component';
import { FinaceDepartmentComponent } from './componenets/finace-department/finace-department.component';

@NgModule({
  declarations: [
    AppComponent   ,
    TBLShamelUserListComponent,
    TBLShamelUserEditComponent,
    TBLShamelPrivilagesComponent,
    LoginComponent,
    EmployeesDepartmentComponent,
    FinaceDepartmentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
   AppRoutingModule,
    BrowserAnimationsModule,
  
    HttpClientModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,    
    HttpClientModule  ,
    MatGridListModule,
    ScrollingModule ,
    MatToolbarModule ,
    MatSidenavModule ,
    MatIconModule ,
    MatDividerModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MomentDateModule,
    MatFormFieldModule,
    FlexLayoutModule  ,
    MatInputModule ,
   
    MatListModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule ,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatMomentDateModule ,
    MatRadioModule,
   MatTreeModule,
   MatCardModule,
   MatProgressSpinnerModule,
   MomentDateModule,
   MatMomentDateModule ,
   SharedModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    
  {
    provide: HTTP_INTERCEPTORS,     
    useClass: TokenInterceptor,

    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
