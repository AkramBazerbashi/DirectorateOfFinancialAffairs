
import {  Component, Inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TBLShamelOvertimeEmployeeService } from 'src/app/modules/shared/services/finance_department/broker/tblshamel-overtime-employee.service';
import * as _moment from 'moment';
import { Moment } from 'moment';

import * as moment from 'moment';
import { TBLShamelOvertimeEmployee } from 'src/app/modules/shared/models/finance_department/broker/TBLShamelOvertimeEmployee';



@Component({
  selector: 'app-tblshamel-overtime-employee-modify',
  templateUrl: './tblshamel-overtime-employee-modify.component.html',
  styleUrls: ['./tblshamel-overtime-employee-modify.component.scss']
})
export class TBLShamelOvertimeEmployeeModifyComponent implements OnInit {



  //Link To Employee 
  selected_overtime_employee: TBLShamelOvertimeEmployee;

  //Array Of AutoComplere With Filter


  // Access To Element in Form
  //Array Of AutoComplere With Filter
  // Access To Element in Form
  Form: FormGroup;
  Serail = new FormControl();
  FName = new FormControl();
  LName = new FormControl();
  Father = new FormControl();
  mother = new FormControl();
  BirthDate = new FormControl();
  SexName = new FormControl();
  selected = "ذكر";
  ServiceDayes = new FormControl();
  EnterUserName = new FormControl();
  EnterDate = new FormControl();
  EnterTime = new FormControl();
  ModifyUserName = new FormControl();
  ModifyDate = new FormControl();
  ModifyTime = new FormControl();




  //Local Var

  submitted = false;
  // loading: boolean = false;

  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { obj: TBLShamelOvertimeEmployee },
    public TBLShamelOvertimeEmployeeService: TBLShamelOvertimeEmployeeService,
    private fb: FormBuilder
  ) {

    //Get Data From Dialog
    this.selected_overtime_employee = data.obj;
    // Call BuildForm To Build Reactive Form
    this.BuildForm();
    // Call Set Value to Fill Reactive Form With Value From selected_overtime_employee
    this.SetValue();



  }

  ngOnInit(): void {
    this.SetValue();
  }



  ngAfterViewInit() {
    this.SetValue();
  }




  public BuildForm() {


    try {

      this.Form = new FormGroup({});
      this.Serail = new FormControl();
      this.FName = new FormControl('', [Validators.required]);
      this.LName = new FormControl('', [Validators.required]);
      this.Father = new FormControl('', [Validators.required]);
      this.mother = new FormControl('', [Validators.required]);
      this.BirthDate = new FormControl('', [Validators.required]);
      this.ServiceDayes = new FormControl('', [Validators.required]);
      this.EnterUserName = new FormControl("");
      this.EnterDate = new FormControl("");
      this.EnterTime = new FormControl("");
      this.ModifyUserName = new FormControl("");
      this.ModifyDate = new FormControl("");
      this.ModifyTime = new FormControl("");
      this.SexName = new FormControl('', [Validators.required]);

      this.Form.addControl('FName', this.FName);
      this.Form.addControl('LName', this.LName);
      this.Form.addControl('Father', this.Father);
      this.Form.addControl('mother', this.mother);
      this.Form.addControl('BirthDate', this.BirthDate);
      this.Form.addControl('SexName', this.SexName);
      this.Form.addControl('ServiceDayes', this.ServiceDayes);
      this.Form.addControl('EnterUserName', this.EnterUserName);
      this.Form.addControl('EnterDate', this.EnterDate);
      this.Form.addControl('EnterTime', this.EnterTime);
      this.Form.addControl('ModifyUserName', this.ModifyUserName);
      this.Form.addControl('ModifyDate', this.ModifyDate);
      this.Form.addControl('ModifyTime', this.ModifyTime);
      this.Form.addControl('Serail', this.Serail);

      this.FName.setAsyncValidators([this.isValidName()]);


    } catch (Exception: any) {
      console.log(Exception);
    }
  }


  addValidator() {

  }

  isValidName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      let bReturn: boolean = true;

      let FName = this.Form.controls['FName'].value;
      let LName = this.Form.controls['LName'].value;
      let Serail = this.Form.controls['Serail'].value;


      if (FName == '') {
        bReturn = false;
      }else 
      if (LName == '') {
        bReturn = false;
      } else {
        this.TBLShamelOvertimeEmployeeService.Validate_Name(FName, LName, Serail).subscribe(
          data => {
            if (data && data.length>0)
              bReturn = true;
          }
        );

      }


      let err: ValidationErrors = { 'invalid': true };
      return bReturn ? of(null) : of(err);
    };
  }


  public ClearForm() {
    try {
      // Call This
      this.Form.reset()
      // Or This
      this.FName.reset();
      this.LName.reset();
      this.Father.reset();
      this.mother.reset();
      this.BirthDate.reset();
      this.SexName.reset();
      this.ServiceDayes.reset();
      this.EnterUserName.reset();
      this.EnterDate.reset();
      this.EnterTime.reset();
      this.ModifyUserName.reset();
      this.ModifyDate.reset();
      this.ModifyTime.reset();

    } catch (ex: any) {

    }

  }


  public SetValue() {
    try {
      {

        this.Serail.setValue(this.selected_overtime_employee?.serial);

        if (this.selected_overtime_employee != null &&
          this.selected_overtime_employee.serial != null &&
          this.selected_overtime_employee.serial > 0) {
          this.FName.setValue(this.selected_overtime_employee?.fname);
          this.LName.setValue(this.selected_overtime_employee?.lname);
          this.Father.setValue(this.selected_overtime_employee?.father);
          this.mother.setValue(this.selected_overtime_employee?.mother);
          this.BirthDate.setValue(moment(this.selected_overtime_employee?.birthdate).toDate());
          this.ServiceDayes.setValue(this.selected_overtime_employee?.servicedayes);


          this.ServiceDayes.setValue(this.selected_overtime_employee?.EnterUserName);
          if (this.selected_overtime_employee.enterdate != null)
            this.ServiceDayes.setValue(moment(this.selected_overtime_employee?.enterdate).toDate());

          this.ServiceDayes.setValue(this.selected_overtime_employee?.entertime);

          this.ServiceDayes.setValue(this.selected_overtime_employee?.modifyusername);
          if (this.selected_overtime_employee.modifydate != null)
            this.ServiceDayes.setValue(this.selected_overtime_employee?.modifydate);
          this.ServiceDayes.setValue(this.selected_overtime_employee?.modifytime);




          if (this.selected_overtime_employee.sex_name != null &&
            this.selected_overtime_employee.sex_name.length > 0)
            this.selected = this.selected_overtime_employee.sex_name;

        }




      }

    } catch (ex: any) {
      console.log(ex);

    }

  }

  public getValue() {
    try {

      if (this.selected_overtime_employee) {
        this.selected_overtime_employee.fname = this.FName.value;
        this.selected_overtime_employee.lname = this.LName.value;
        this.selected_overtime_employee.father = this.Father.value;
        this.selected_overtime_employee.mother = this.mother.value;
        this.selected_overtime_employee.birthdate = this.BirthDate.value;
        // this.selected_overtime_employee.SexName = this.SexName.value;
        this.selected_overtime_employee.sex_name = this.selected;
        this.selected_overtime_employee.servicedayes = this.ServiceDayes.value;
        this.selected_overtime_employee.EnterUserName = this.EnterUserName.value;
        this.selected_overtime_employee.enterdate = this.EnterDate.value;
        this.selected_overtime_employee.entertime = this.EnterTime.value;
        this.selected_overtime_employee.modifyusername = this.ModifyUserName.value;
        this.selected_overtime_employee.modifydate = this.ModifyDate.value;
        this.selected_overtime_employee.modifytime = this.ModifyTime.value;


      }
    } catch (ex: any) {

    }

  }


  public async Save() {



    //Form Not Valid Then return
    if (!this.Form.valid == true) {
      return;
    }

    //Get The Value from Ui and Fill Selected Employee
    this.getValue();


    if (this.selected_overtime_employee &&
      this.selected_overtime_employee.serial != null &&
      this.selected_overtime_employee.serial <= 0) {


      // comment when using real data service
      this.TBLShamelOvertimeEmployeeService.add(this.selected_overtime_employee).subscribe(
        data => {
          if (data > 0) // Succeess 
          {
            this.ClearForm();
          }

        }
      )

    }

    else if (this.selected_overtime_employee &&
      this.selected_overtime_employee.serial != null &&
      this.selected_overtime_employee.serial > 0) {

      // comment when using real data service
      this.TBLShamelOvertimeEmployeeService.update(this.selected_overtime_employee).subscribe(
        data => {
          if (data > 0) // Succeess 
          {
            this.ClearForm();
          }
        }
      )



    }
  }

  onReset() {
    this.Form.reset();
  }




}
