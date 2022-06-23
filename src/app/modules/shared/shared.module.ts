import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
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
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MenuListItemComponent } from './components/sidebar/menu-list-item/menu-list-item.component';
import { NavService } from './components/sidebar/nav.service';
import { EmployeeServiceService } from './services/employees_department/employee-service.service';
import { TblShamelSexService } from './services/employees_department/tbl-shamel-sex.service';
import { TBLShamelCertificateService } from './services/employees_department/tblshamel-certificate.service';
import { TBLShamelBonusReasonService } from './services/employees_department/tblshamel-bonus-reason.service';
import { TBLShamelAreaService } from './services/employees_department/tblshamel-area.service';
import { TBLShamelBonusService } from './services/employees_department/tblshamel-bonus.service';
import { TBLShamelDoctorService } from './services/employees_department/tblshamel-doctor.service';
import { TBLShamelEmployeeDocPicService } from './services/employees_department/tblshamel-employee-doc-pic.service';
import { TBLShamelFreeHolidayReasonService } from './services/employees_department/tblshamel-free-holiday-reason.service';
import { TBLShamelMartialStateService } from './services/employees_department/tblshamel-martial-state.service';
import { TBLShamelMergeServiceReasonService } from './services/employees_department/tblshamel-merge-service-reason.service';
import { TBLShamelMiniAreaService } from './services/employees_department/tblshamel-mini-area.service';
import { TBLShamelNationalityService } from './services/employees_department/tblshamel-nationality.service';
import { TBLShamelPunishmentReasonService } from './services/employees_department/tblshamel-punishment-reason.service';
import { TBLShamelSCPunishmentService } from './services/employees_department/tblshamel-scpunishment.service';
import { TblshamelclassService } from './services/employees_department/tblshamelclass.service';
import { TblshamelcountryService } from './services/employees_department/tblshamelcountry.service';
import { TblshameldepartmentService } from './services/employees_department/tblshameldepartment.service';
import { TblshameldocumenttypeService } from './services/employees_department/tblshameldocumenttype.service';
import { TblshamelincmarsoomService } from './services/employees_department/tblshamelincmarsoom.service';
import { TblshameljobnameService } from './services/employees_department/tblshameljobname.service';
import { TblshamelyearService } from './services/employees_department/tblshamelyear.service';
import {TBLShamelPunishmentService} from './services/employees_department/tblshamel-punishment.service';
import {TblshamelsceducationService} from './services/employees_department/tblshamelsceducation.service';
import {TblshamelstateService} from './services/employees_department/tblshamelstate.service';
import {TblshamelspecificationService} from './services/employees_department/tblshamelspecification.service';
import {TblshamelscjobstateService} from './services/employees_department/tblshamelscjobstate.service';

import {TblshamelsccourseService} from './services/employees_department/tblshamelsccourse.service';
import {TblshamelrankService } from  './services/employees_department/tblshamelrank.service';
import {TblshamelmalakstateService} from './services/employees_department/tblshamelmalakstate.service';
import {TblshameljobkindService} from './services/employees_department/tblshameljobkind.service';
import {TblshamelcourseService} from './services/employees_department/tblshamelcourse.service';
import {TBLShamelStreetOrVillageService} from './services/employees_department/tblshamel-street-or-village.service';
import {TblshamelchangereasonService} from './services/employees_department/tblshamelchangereason.service';
import {TBLShamelSuddenHolidayService} from './services/employees_department/tblshamel-sudden-holiday.service';
import {TBLShamelSexService} from './services/employees_department/tblshamel-sex.service';

import {IGlobalEmployeeList} from './services/employees_department/IGlobalEmployeeList';
import { DefaultComponent } from './layouts/default/default.component';
import { ConfirmationdialogComponent } from './components/confirmationdialog/confirmationdialog.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MomentDateModule, MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';










@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,  
    MenuListItemComponent,
    DefaultComponent,
    ConfirmationdialogComponent
  ],
  imports: [
    CommonModule,
  MatDividerModule,
  MatToolbarModule, 
  MatButtonModule,
  FlexLayoutModule,
  MatMenuModule,
  MatListModule,
  RouterModule,  
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

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConfirmationdialogComponent
  ],
  providers: [NavService,EmployeeServiceService,TblShamelSexService,TBLShamelAreaService,
    TBLShamelBonusReasonService,TBLShamelBonusService,TBLShamelCertificateService,TBLShamelDoctorService,
    TBLShamelEmployeeDocPicService,TBLShamelFreeHolidayReasonService,TBLShamelMartialStateService,TBLShamelMergeServiceReasonService,
    TBLShamelMiniAreaService,TBLShamelNationalityService,TBLShamelPunishmentReasonService,
    TBLShamelPunishmentService,TblshamelyearService,TblshamelstateService,TblshamelspecificationService,TblshamelscjobstateService,

TblshamelsceducationService,TblshamelsccourseService,TblshamelrankService,TblshamelmalakstateService,TblshameljobnameService
,TblshameljobkindService,TblshamelincmarsoomService,TblshameldocumenttypeService,TblshameldepartmentService,
TblshamelcourseService,TblshamelcountryService,TblshamelclassService,TblshamelchangereasonService,TBLShamelSuddenHolidayService,
TBLShamelStreetOrVillageService,TBLShamelSexService,TBLShamelSCPunishmentService,TblshamelchangereasonService,IGlobalEmployeeList


  ],

})
export class SharedModule { }
