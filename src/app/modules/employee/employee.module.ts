import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from '../shared/models/employees_department/MY_DATE_FORMATS';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
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

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
//component 

import { NewEmployeeCardComponent } from './components/tblshamelemployee/new-employee-card/new-employee-card.component';
import { EmpShowDataComponent } from './components/tblshamelemployee/emp-show-data/emp-show-data.component';
import { TBLShamelCertificateComponent } from './components/tblshamelcertificate/tblshamelcertificatelist/tblshamelcertificatelist.component';
import { EmployeeSeachDialogComponent } from './components/tblshamelemployee/employee-seach-dialog/employee-seach-dialog.component';
import { EditEmployeeCardComponent } from './components/tblshamelemployee/edit-employee-card/edit-employee-card.component';
import { TblshamelcertificatemodifyComponent } from './components/tblshamelcertificate/tblshamelcertificatemodify/tblshamelcertificatemodify.component';
import { DataEntryDialogComponent } from './components/tblshamelemployee/data-entry-dialog/data-entry-dialog.component';
import { TblshamelsceducationlistComponent } from './components/tblshamelsceducation/tblshamelsceducationlist/tblshamelsceducationlist.component';
import { TblshamelsceducationmodifyComponent } from './components/tblshamelsceducation/tblshamelsceducationmodify/tblshamelsceducationmodify.component';
import { ConfirmationdialogComponent } from './components/common/confirmationdialog/confirmationdialog.component';
import { TblshamelsccourselistComponent } from './components/tblshamelsccourse/tblshamelsccourselist/tblshamelsccourselist.component';
import { TblshamelsccoursemodifyComponent } from './components/tblshamelsccourse/tblshamelsccoursemodify/tblshamelsccoursemodify.component';
import { TblshamelscjobstatelistComponent } from './components/tblshamelscjobstate/tblshamelscjobstatelist/tblshamelscjobstatelist.component';
import { TblshamelscjobstatemodifyComponent } from './components/tblshamelscjobstate/tblshamelscjobstatemodify/tblshamelscjobstatemodify.component';
import { TblshamelscbonuslistComponent } from './components/tblshamelscbonus/tblshamelscbonuslist/tblshamelscbonuslist.component';
import { TblshamelscbonusmodifyComponent } from './components/tblshamelscbonus/tblshamelscbonusmodify/tblshamelscbonusmodify.component';
import { TblshamelscfreeholidaylistComponent } from './components/tblshamelscfreeholiday/tblshamelscfreeholidaylist/tblshamelscfreeholidaylist.component';
import { TblshamelscfreeholidaymodifyComponent } from './components/tblshamelscfreeholiday/tblshamelscfreeholidaymodify/tblshamelscfreeholidaymodify.component';
import { TblshamelscpunishmentlistComponent } from './components/tblshamelscpunishment/tblshamelscpunishmentlist/tblshamelscpunishmentlist.component';
import { TblshamelscpunishmentmodifyComponent } from './components/tblshamelscpunishment/tblshamelscpunishmentmodify/tblshamelscpunishmentmodify.component';
import { TblshamelsccancelpunishmentmodifyComponent } from './components/tblshamelscpunishment/tblshamelsccancelpunishmentmodify/tblshamelsccancelpunishmentmodify.component';
import { TblshamelincmarsoomlistComponent } from './components/tblshamelincmarsoom/tblshamelincmarsoomlist/tblshamelincmarsoomlist.component';
import { TblshamelincmarsoommodifyComponent } from './components/tblshamelincmarsoom/tblshamelincmarsoommodify/tblshamelincmarsoommodify.component';
import { EmployeechangeidComponent } from './components/employeechangeid/employeechangeid/employeechangeid.component';
import { DeleteemployeeComponent } from './components/deleteemployee/deleteemployee/deleteemployee.component';
import { TBLShamelEmployeeDocPicComponent } from './components/TBLShamelEmployeeDocPic/tblshamel-employee-doc-pic/tblshamel-employee-doc-pic.component';
import { ManagementTBLShamelEmployeeDocPicComponent } from './components/TBLShamelEmployeeDocPic/management-tblshamel-employee-doc-pic/management-tblshamel-employee-doc-pic.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeSearchBarComponent } from './components/employee-search-bar/employee-search-bar.component';
import { TblshamelschealthholidayListComponent } from './components/tblshamelschealthholiday/tblshamelschealthholiday-list/tblshamelschealthholiday-list.component';
import { TblshamelschealthholidayModifyComponent } from './components/tblshamelschealthholiday/tblshamelschealthholiday-modify/tblshamelschealthholiday-modify.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { TblshamelscmergeserviceListComponent } from './components/tblshamelscmergeservice/tblshamelscmergeservice-list/tblshamelscmergeservice-list.component';
import { TblshamelscmergeserviceModifyComponent } from './components/tblshamelscmergeservice/tblshamelscmergeservice-modify/tblshamelscmergeservice-modify.component';
import { TBLShamelSCLEgalHolidayListComponent } from './components/tblshamelsclegalholiday/tblshamel-sc-legal-holiday-list/tblshamel-sc-legal-holiday-list.component';
import { TBLShamelSCLEgalHolidayAddComponent } from './components/tblshamelsclegalholiday/tblshamel-sc-legal-holiday-add/tblshamel-sc-legal-holiday-add.component';
import { TBLShamelSCSuddenHolidayComponent } from './components/tblshamelscsuddenholiday/tblshamel-sc-sudden-holiday/tblshamel-sc-sudden-holiday.component';
import { TBLShamelSCSuddenHolidayListComponent } from './components/tblshamelscsuddenholiday/tblshamel-sc-sudden-holiday-list/tblshamel-sc-sudden-holiday-list.component';
import { TBLShamelSCSuddenHolidayAddComponent } from './components/tblshamelscsuddenholiday/tblshamel-sc-sudden-holiday-add/tblshamel-sc-sudden-holiday-add.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {SharedModule } from '../shared/shared.module';
import { EmployeeManagementComponent } from './components/employee-management.component'
import { EmployeeRoutingModule } from './employee-routing.module';




@NgModule({
  declarations: [
   
    NewEmployeeCardComponent,
    EditEmployeeCardComponent,
    EmpShowDataComponent,
    EmployeeSeachDialogComponent,
    DataEntryDialogComponent,
    TBLShamelCertificateComponent,
    TblshamelcertificatemodifyComponent,   
    ConfirmationdialogComponent,
    TblshamelsceducationlistComponent,
    TblshamelsceducationmodifyComponent,
    TblshamelsccourselistComponent,
    TblshamelsccoursemodifyComponent,
    TblshamelscjobstatelistComponent,
    TblshamelscjobstatemodifyComponent,
    TblshamelscbonuslistComponent,
    TblshamelscbonusmodifyComponent,
    TblshamelscfreeholidaylistComponent,
    TblshamelscfreeholidaymodifyComponent,
    TblshamelscpunishmentlistComponent,
    TblshamelscpunishmentmodifyComponent,
    TblshamelsccancelpunishmentmodifyComponent,
    TblshamelincmarsoomlistComponent,
    TblshamelincmarsoommodifyComponent,
    EmployeechangeidComponent,
    DeleteemployeeComponent,
    TBLShamelEmployeeDocPicComponent,
    ManagementTBLShamelEmployeeDocPicComponent,
    EmployeeSearchBarComponent,
    TblshamelschealthholidayListComponent,
    TblshamelschealthholidayModifyComponent,
    ListEmployeeComponent,
    TblshamelscmergeserviceListComponent,
    TblshamelscmergeserviceModifyComponent,
    TBLShamelSCLEgalHolidayListComponent,
    TBLShamelSCLEgalHolidayAddComponent,
    TBLShamelSCSuddenHolidayComponent,
    TBLShamelSCSuddenHolidayListComponent,
    TBLShamelSCSuddenHolidayAddComponent,
    EmployeeComponent,
    EmployeeManagementComponent,


  ],
  imports: [  
    CommonModule,
    RouterModule,
    EmployeeRoutingModule,
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
    MatButtonToggleModule ,
    SharedModule
   
  ],
  exports:[
    NewEmployeeCardComponent,
    EditEmployeeCardComponent,
    EmpShowDataComponent,
    EmployeeSeachDialogComponent,
    DataEntryDialogComponent,
    TBLShamelCertificateComponent,
    TblshamelcertificatemodifyComponent,   
    ConfirmationdialogComponent,
    TblshamelsceducationlistComponent,
    TblshamelsceducationmodifyComponent,
    TblshamelsccourselistComponent,
    TblshamelsccoursemodifyComponent,
    TblshamelscjobstatelistComponent,
    TblshamelscjobstatemodifyComponent,
    TblshamelscbonuslistComponent,
    TblshamelscbonusmodifyComponent,
    TblshamelscfreeholidaylistComponent,
    TblshamelscfreeholidaymodifyComponent,
    TblshamelscpunishmentlistComponent,
    TblshamelscpunishmentmodifyComponent,
    TblshamelsccancelpunishmentmodifyComponent,
    TblshamelincmarsoomlistComponent,
    TblshamelincmarsoommodifyComponent,
    EmployeechangeidComponent,
    DeleteemployeeComponent,
    TBLShamelEmployeeDocPicComponent,
    ManagementTBLShamelEmployeeDocPicComponent,
    EmployeeSearchBarComponent,
    TblshamelschealthholidayListComponent,
    TblshamelschealthholidayModifyComponent,
    ListEmployeeComponent,
    TblshamelscmergeserviceListComponent,
    TblshamelscmergeserviceModifyComponent,
    TBLShamelSCLEgalHolidayListComponent,
    TBLShamelSCLEgalHolidayAddComponent,
    TBLShamelSCSuddenHolidayComponent,
    TBLShamelSCSuddenHolidayListComponent,
    TBLShamelSCSuddenHolidayAddComponent,
    EmployeeComponent,  
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
  
})

export class EmployeeModule {
  

 }
