import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataEntryDialogComponent } from '../data-entry-dialog/data-entry-dialog.component';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditEmployeeCardComponent } from '../edit-employee-card/edit-employee-card.component';
//
import { MatInputModule } from '@angular/material/input';
import { TBLShamelNationalityService } from '../../../../shared/services/employees_department/tblshamel-nationality.service';
import { TBLShamelNationality } from '../../../../shared/models/employees_department/TBLShamelNationality';
import { NgModule } from '@angular/core';
import { TBLShamelSex } from '../../../../shared/models/employees_department/TBLShamelSex';
import { TBLShamelMiniAreaService } from '../../../../shared/services/employees_department/tblshamel-mini-area.service';
import { TBLShamelArea } from '../../../../shared/models/employees_department/TBLShamelArea';
import { TBLShamelMartialStateService } from '../../../../shared/services/employees_department/tblshamel-martial-state.service';
import { TBLShamelStreetOrVillageService } from '../../../../shared/services/employees_department/tblshamel-street-or-village.service';
import { TBLShamelAreaService } from '../../../../shared/services/employees_department/tblshamel-area.service';
import { TBLShamelSexService } from '../../../../shared/services/employees_department/tblshamel-sex.service';
import { Observable } from 'rxjs';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TBLShamelMartialState } from '../../../../shared/models/employees_department/TBLShamelMartialState';
import { TBLShamelMiniArea } from '../../../../shared/models/employees_department/TBLShamelMiniArea';
import { TBLShamelStreetOrVillage } from '../../../../shared/models/employees_department/TBLShamelStreetOrVillage';
import { EmployeeServiceService } from '../../../../shared/services/employees_department/employee-service.service';

import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NewEmployeeCardComponent } from '../new-employee-card/new-employee-card.component';
//
@Component({
  selector: 'app-emp-show-data',
  templateUrl: './emp-show-data.component.html',
  styleUrls: ['./emp-show-data.component.scss']
})
export class EmpShowDataComponent implements OnInit {
  @Input() SelectedEmp : TBLShamelEmployee;

 
  


  PhotoUrl:SafeUrl;
  constructor(
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    console.log( 'iside child');
    console.log( this.SelectedEmp);
    let objectURL = 'data:image/jpeg;base64,' + this.SelectedEmp.Photo;
    this.PhotoUrl    = this.sanitizer.bypassSecurityTrustUrl(objectURL); 
 
            


  }


  Show_EntryOfficer() {

    console.log(this.SelectedEmp);
    const dialogRef = this.dialog.open(DataEntryDialogComponent, {
      data: { dataEmp: this.SelectedEmp },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Add_Employee() {

    console.log(this.SelectedEmp);
    var Emp = new TBLShamelEmployee();

    const dialogRef = this.dialog.open(NewEmployeeCardComponent, {
      height: '90%',
      width: '90%',
      data: { dataEmp: Emp },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Update_Employee() {

    console.log(this.SelectedEmp);
    if (this.SelectedEmp)
    {
      const dialogRef = this.dialog.open(EditEmployeeCardComponent, {
        data: { dataEmp: this.SelectedEmp },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

    }

  }

  Add_Modify_Documents() {

    console.log(this.SelectedEmp);
    const dialogRef = this.dialog.open(DataEntryDialogComponent, {
      data: { dataEmp: this.SelectedEmp },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  Show_Documents() {

    console.log(this.SelectedEmp);
    const dialogRef = this.dialog.open(DataEntryDialogComponent, {
      data: { dataEmp: this.SelectedEmp },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
