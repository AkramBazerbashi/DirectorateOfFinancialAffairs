import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { FinanceRoutingModule } from './finance-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FinaceComponent } from './finace.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BrokerComponent } from './broker/broker.component';
import { TBLShamelOvertimeEmployeeListComponent } from './broker/components/tblShamelOvertimeEmployee/tblshamel-overtime-employee-list/tblshamel-overtime-employee-list.component';
import { TBLShamelOvertimeEmployeeModifyComponent } from './broker/components/tblShamelOvertimeEmployee/tblshamel-overtime-employee-modify/tblshamel-overtime-employee-modify.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationDialogComponent } from './broker/components/common/confirmation-dialog/confirmation-dialog.component';
import { MY_DATE_FORMATS } from '../shared/models/employees_department/MY_DATE_FORMATS';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    FinaceComponent,
    BrokerComponent,
    TBLShamelOvertimeEmployeeListComponent,
    TBLShamelOvertimeEmployeeModifyComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    InfiniteScrollModule,
    SharedModule,
    ReactiveFormsModule,
    MatTableModule,
    RouterModule,  
    MatDividerModule,
  MatToolbarModule, 
  MatButtonModule,
  FlexLayoutModule,
  MatMenuModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatInputModule,
  MatButtonModule,  
  MatGridListModule,
  ScrollingModule ,
  MatToolbarModule ,
  MatSidenavModule ,
  MatIconModule ,
  FormsModule,  
  MatPaginatorModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MomentDateModule,
  MatFormFieldModule,
  FlexLayoutModule  ,
  MatInputModule ,
  MatSelectModule,

  ],

  
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class FinanceModule { }
