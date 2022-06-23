import { TBLShamelSex } from '../../../../shared/models/employees_department/TBLShamelSex';
import { TBLShamelMiniAreaService } from '../../../../shared/services/employees_department/tblshamel-mini-area.service';
import { TBLShamelArea } from '../../../../shared/models/employees_department/TBLShamelArea';
import { TBLShamelMartialStateService } from '../../../../shared/services/employees_department/tblshamel-martial-state.service';
import { TBLShamelStreetOrVillageService } from '../../../../shared/services/employees_department/tblshamel-street-or-village.service';
import { TBLShamelAreaService } from '../../../../shared/services/employees_department/tblshamel-area.service';
import { TBLShamelSexService } from '../../../../shared/services/employees_department/tblshamel-sex.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TBLShamelMartialState } from '../../../../shared/models/employees_department/TBLShamelMartialState';
import { TBLShamelMiniArea } from '../../../../shared/models/employees_department/TBLShamelMiniArea';
import { TBLShamelStreetOrVillage } from '../../../../shared/models/employees_department/TBLShamelStreetOrVillage';
import { EmployeeServiceService } from '../../../../shared/services/employees_department/employee-service.service';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-data-entry-dialog',
  templateUrl: './data-entry-dialog.component.html',
  styleUrls: ['./data-entry-dialog.component.scss']
})
export class DataEntryDialogComponent implements OnInit {

  @Input() SelectedEmp : TBLShamelEmployee;

  constructor() {  
   }

   ngOnInit(): void {
   
  }

  


}
