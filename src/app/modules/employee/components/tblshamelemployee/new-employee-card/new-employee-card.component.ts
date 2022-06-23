import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../../../shared/services/employees_department/employee-service.service';
import { Validator_COMPUTER_ID } from './Validators/Validator_COMPUTER_ID';
import { validator_GLOBAL_ID } from './Validators/validator_GLOBAL_ID';
import { Validator_INSURANCE_ID } from './Validators/Validator_INSURANCE_ID';
import { Validator_PAYROL_ID } from './Validators/Validator_PAYROL_ID';

import { TBLShamelSex } from '../../../../shared/models/employees_department/TBLShamelSex';
import { TBLShamelNationality } from '../../../../shared/models/employees_department/TBLShamelNationality';
import { TBLShamelArea } from '../../../../shared/models/employees_department/TBLShamelArea';
import { TBLShamelStreetOrVillage } from '../../../../shared/models/employees_department/TBLShamelStreetOrVillage';
import { TBLShamelMartialState } from '../../../../shared/models/employees_department/TBLShamelMartialState';
import { TBLShamelMiniArea } from '../../../../shared/models/employees_department/TBLShamelMiniArea';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map, Observable } from 'rxjs';
import * as _moment from 'moment';
import { TBLShamelMartialStateService } from '../../../../shared/services/employees_department/tblshamel-martial-state.service';
import { TBLShamelSexService } from '../../../../shared/services/employees_department/tblshamel-sex.service';
import { TBLShamelStreetOrVillageService } from '../../../../shared/services/employees_department/tblshamel-street-or-village.service';
import { TBLShamelAreaService } from '../../../../shared/services/employees_department/tblshamel-area.service';
import { TBLShamelMiniAreaService } from '../../../../shared/services/employees_department/tblshamel-mini-area.service';
import { TBLShamelNationalityService } from '../../../../shared/services/employees_department/tblshamel-nationality.service';
const moment = _moment;


@Component({
  selector: 'app-new-employee-card',
  templateUrl: './new-employee-card.component.html',
  styleUrls: ['./new-employee-card.component.scss']
})
export class NewEmployeeCardComponent implements OnInit {


  _Selected_Employee : TBLShamelEmployee = new TBLShamelEmployee ();
  @Input() set  Selected_Employee(passFromParent:TBLShamelEmployee)
  {
    this._Selected_Employee = passFromParent;
    this.Object2FromControl();
  }

  get Selected_Employee():TBLShamelEmployee
  {
    return this._Selected_Employee;
  }

  

  List_SEX : TBLShamelSex[]=[];
  filtered_SEX :Observable< TBLShamelSex[]>;


  
  List_NATIONALITY:TBLShamelNationality[]=[];  
  filtered_NATIONALITY:Observable<TBLShamelNationality[]>;

  List_TBLSHAMELMARTIALSTATE:TBLShamelMartialState[] =[];  
  filtered_TBLSHAMELMARTIALSTATE :Observable<TBLShamelMartialState[]>;
  



  List_TBLShamelMiniArea:TBLShamelMiniArea[] =[];
  filtered_TBLShamelMiniArea:Observable<TBLShamelMiniArea[]>;




  List_AREA:TBLShamelArea[] = [] ;
  filtered_AREA:Observable<TBLShamelArea[]>;

  List_STREETORVILLAGE:TBLShamelStreetOrVillage[] =[];
  filtered_STREETORVILLAGE:Observable<TBLShamelStreetOrVillage[]>;


  Form: FormGroup;
  fcl_ID: FormControl;
  fcl_PAYROL_ID: FormControl;
  fcl_COMPUTER_ID: FormControl;
  fcl_GLOBAL_ID: FormControl;
  fcl_INSURANCE_ID: FormControl;
  fcl_FNAME: FormControl;
  fcl_LNAME: FormControl;

  fcl_FATHER: FormControl;
  fcl_MOTHER: FormControl;
  fcl_BIRTH_PLACE: FormControl;
  fcl_BIRTHDATE: FormControl;
  fcl_KAYD_PLACE: FormControl;
  fcl_SEX_NAME: FormControl;
  fcl_NATIONALITY_ID: FormControl;
  fcl_CITY_ID: FormControl;
  fcl_AREA_ID: FormControl;
  fcl_MINIAREA_ID: FormControl;
  fcl_STREETORVILLAGE_ID: FormControl;
  fcl_MANUALADDRESS: FormControl;
  fcl_MARTIALSTATE_NAME: FormControl;
  fcl_PHONENUM: FormControl;
  fcl_ID_NUMBER: FormControl;
  fcl_EDUCATIONLAST_ID: FormControl;
  fcl_JOBSTATEFIRST_ID: FormControl;
  fcl_JOBSTATELAST_ID: FormControl;
  fcl_MALAKSTATE_NAME: FormControl;
  fcl_INSURANCESALARY: FormControl;
  fcl_ACCOUNTER_ID: FormControl;
  fcl_ACCOUNTERSERIAL: FormControl;
  fcl_REM1: FormControl;
  fcl_REM2: FormControl;
  fcl_REM3: FormControl;
  fcl_QARAR_NUM: FormControl;
  fcl_QARARDATE: FormControl;
  fcl_EMP_IN_MILITARY_SERVICE: FormControl;

  constructor(
    private empService: EmployeeServiceService,
    private TblMartialService:TBLShamelMartialStateService,
    private TblSexService:TBLShamelSexService,
     private TblAreaService:TBLShamelAreaService,
    private TblMinAreaService:TBLShamelMiniAreaService,
    private TblStreetService:TBLShamelStreetOrVillageService,
    private TblNationalityService:TBLShamelNationalityService
    ) {


      if(this.TblMartialService.List_TBLShamelMartialState)
        this.List_TBLSHAMELMARTIALSTATE = this.TblMartialService.List_TBLShamelMartialState;
        else
        {
          this.TblMartialService.list().subscribe
          (
            (data)=>
            {
              this.List_TBLSHAMELMARTIALSTATE = data as TBLShamelMartialState[];
              }
          );
        }


        
      if(this.TblSexService.List_TBLShamelSex)
        this.List_SEX = this.TblSexService.List_TBLShamelSex;
      else
      {
        this.TblSexService.list().subscribe
        (
          (data)=>
          {
            this.List_SEX = data as TBLShamelSex[];
            }
        );
      }



      if(this.TblAreaService.List_TBLShamelArea)
        this.List_AREA = this.TblAreaService.List_TBLShamelArea;
      else
      {
        this.TblAreaService.list().subscribe
        (
          (data)=>
          {
            this.List_AREA = data as TBLShamelArea[];
            }
        );
      }


      if(this.TblMinAreaService.List_TBLShamelMiniArea)
      this.List_TBLShamelMiniArea = this.TblMinAreaService.List_TBLShamelMiniArea;
    else
    {
      this.TblMinAreaService.list().subscribe
      (
        (data)=>
        {
          this.List_TBLShamelMiniArea = data as TBLShamelMiniArea[];
          }
      );
    }

    if(this.TblStreetService.List_TBLShamelStreetOrVillage)
      this.List_STREETORVILLAGE = this.TblStreetService.List_TBLShamelStreetOrVillage;
    else
    {
      this.TblStreetService.list().subscribe
      (
        (data)=>
        {
          this.List_STREETORVILLAGE = data as TBLShamelStreetOrVillage[];
          }
      );
    }


    if(this.TblStreetService.List_TBLShamelStreetOrVillage)
      this.List_STREETORVILLAGE = this.TblStreetService.List_TBLShamelStreetOrVillage;
    else
    {
      this.TblStreetService.list().subscribe
      (
        (data)=>
        {
          this.List_STREETORVILLAGE = data as TBLShamelStreetOrVillage[];
          }
      );
    }

    if(this.TblNationalityService.List_TBLShamelNationality)
    this.List_NATIONALITY = this.TblNationalityService.List_TBLShamelNationality;
  else
  {
    this.TblNationalityService.list().subscribe
    (
      (data)=>
      {
        this.List_NATIONALITY = data as TBLShamelNationality[];
        }
    );
  }
    


    this.Form = new FormGroup({});
    this.fcl_ID = new FormControl('', [Validators.required],);

    this.fcl_PAYROL_ID = new FormControl('',
      [Validators.required, Validators.maxLength(10)],
      [Validator_PAYROL_ID(this.empService, this.Selected_Employee.id)]);

    this.fcl_COMPUTER_ID = new FormControl('',
      [Validators.required, Validators.maxLength(10)],
      [Validator_COMPUTER_ID(this.empService, this.Selected_Employee.id)]);

    this.fcl_GLOBAL_ID = new FormControl('',
      [Validators.required, Validators.maxLength(10)],
      [validator_GLOBAL_ID(this.empService, this.Selected_Employee.id)]);

    this.fcl_INSURANCE_ID = new FormControl('',
      [Validators.required, Validators.maxLength(10)],
      [Validator_INSURANCE_ID(this.empService, this.Selected_Employee.id)]);

    this.fcl_FNAME = new FormControl('',
      [Validators.required, Validators.maxLength(35)]);


      this.fcl_LNAME = new FormControl('',
      [Validators.required, Validators.maxLength(35)]);


    this.fcl_FATHER = new FormControl('',
      [Validators.required, Validators.maxLength(35)]);

    this.fcl_MOTHER = new FormControl('',
      [Validators.required, Validators.maxLength(35)]);

    this.fcl_BIRTH_PLACE = new FormControl('',
      [Validators.required, Validators.maxLength(35)]);

    this.fcl_BIRTHDATE = new FormControl('');

    this.fcl_KAYD_PLACE = new FormControl('',
      [Validators.required, Validators.maxLength(35)]);

    this.fcl_SEX_NAME = new FormControl('',
      [Validators.required, Validators.maxLength(5)]);

    this.fcl_QARAR_NUM = new FormControl('', [Validators.required]);

    this.fcl_QARARDATE = new FormControl('', [Validators.required]);

    this.fcl_NATIONALITY_ID = new FormControl('', [Validators.required]);
    this.fcl_CITY_ID = new FormControl('', [Validators.required]);
    this.fcl_AREA_ID = new FormControl('', []);
    this.fcl_MINIAREA_ID = new FormControl('', []);
    this.fcl_STREETORVILLAGE_ID = new FormControl('', []);
    this.fcl_MANUALADDRESS = new FormControl('', []);
    this.fcl_MARTIALSTATE_NAME = new FormControl('', []);
    this.fcl_PHONENUM = new FormControl('', []);
    this.fcl_ID_NUMBER = new FormControl('', []);
    this.fcl_EDUCATIONLAST_ID = new FormControl('', []);
    this.fcl_JOBSTATEFIRST_ID = new FormControl('', []);
    this.fcl_JOBSTATELAST_ID = new FormControl('', []);
    this.fcl_MALAKSTATE_NAME = new FormControl('', []);
    this.fcl_INSURANCESALARY = new FormControl('', []);
    this.fcl_ACCOUNTER_ID = new FormControl('', []);
    this.fcl_ACCOUNTERSERIAL = new FormControl('', []);
    this.fcl_REM1 = new FormControl('', []);
    this.fcl_REM2 = new FormControl('', []);
    this.fcl_REM3 = new FormControl('', []);
    this.fcl_FNAME = new FormControl('', []);
    this.fcl_EMP_IN_MILITARY_SERVICE= new FormControl('', []);



    this.Form.addControl('ID', this.fcl_ID);
    this.Form.addControl('PAYROL_ID', this.fcl_PAYROL_ID);
    this.Form.addControl('COMPUTER_ID', this.fcl_COMPUTER_ID);
    this.Form.addControl('GLOBAL_ID', this.fcl_GLOBAL_ID);
    this.Form.addControl('INSURANCE_ID', this.fcl_INSURANCE_ID);
    this.Form.addControl('FNAME', this.fcl_FNAME);
    this.Form.addControl('LNAME', this.fcl_LNAME);

    this.Form.addControl('FATHER', this.fcl_FATHER);
    this.Form.addControl('MOTHER', this.fcl_MOTHER);
    this.Form.addControl('BIRTH_PLACE', this.fcl_BIRTH_PLACE);
    this.Form.addControl('BIRTHDATE', this.fcl_BIRTHDATE);
    this.Form.addControl('KAYD_PLACE', this.fcl_KAYD_PLACE);
    this.Form.addControl('SEX_NAME', this.fcl_SEX_NAME);
    this.Form.addControl('NATIONALITY_ID', this.fcl_NATIONALITY_ID);
    this.Form.addControl('CITY_ID', this.fcl_CITY_ID);
    this.Form.addControl('AREA_ID', this.fcl_AREA_ID);
    this.Form.addControl('MINIAREA_ID', this.fcl_MINIAREA_ID);
    this.Form.addControl('STREETORVILLAGE_ID', this.fcl_STREETORVILLAGE_ID);
    this.Form.addControl('MANUALADDRESS', this.fcl_MANUALADDRESS);
    this.Form.addControl('MARTIALSTATE_NAME', this.fcl_MARTIALSTATE_NAME);
    this.Form.addControl('PHONENUM', this.fcl_PHONENUM);
    this.Form.addControl('ID_NUMBER', this.fcl_ID_NUMBER);
    this.Form.addControl('EDUCATIONLAST_ID', this.fcl_EDUCATIONLAST_ID);
    this.Form.addControl('JOBSTATEFIRST_ID', this.fcl_JOBSTATEFIRST_ID);
    this.Form.addControl('JOBSTATELAST_ID', this.fcl_JOBSTATELAST_ID);
    this.Form.addControl('MALAKSTATE_NAME', this.fcl_MALAKSTATE_NAME);
    this.Form.addControl('INSURANCESALARY', this.fcl_INSURANCESALARY);
    this.Form.addControl('ACCOUNTER_ID', this.fcl_ACCOUNTER_ID);
    this.Form.addControl('ACCOUNTERSERIAL', this.fcl_ACCOUNTERSERIAL);
    this.Form.addControl('REM1', this.fcl_REM1);
    this.Form.addControl('REM2', this.fcl_REM2);
    this.Form.addControl('REM3', this.fcl_REM3);
    this.Form.addControl('QARAR_NUM', this.fcl_QARAR_NUM);
    this.Form.addControl('QARARDATE', this.fcl_QARARDATE);
    this.Form.addControl('EMP_IN_MILITARY_SERVICE', this.fcl_EMP_IN_MILITARY_SERVICE);


  }

  
  ngOnInit(): void {

    this.filtered_TBLSHAMELMARTIALSTATE = this.fcl_MARTIALSTATE_NAME.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filtered_MARTIALSTATE(name) : this.List_TBLSHAMELMARTIALSTATE.slice())),
    );


    this.filtered_SEX = this.fcl_SEX_NAME.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filtered_SEX(name) : this.List_SEX.slice())),
    );

    this.filtered_AREA = this.fcl_AREA_ID.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filtered_Area(name) : this.List_AREA.slice())),
    );

    this.filtered_TBLShamelMiniArea = this.fcl_MINIAREA_ID.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filtered_MiniArea(name) : this.List_TBLShamelMiniArea.slice())),
    );
    
    this.filtered_NATIONALITY = this.fcl_NATIONALITY_ID.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filtered_NATIONALITY(name) : this.List_NATIONALITY.slice())),
    );
}

private _filtered_MARTIALSTATE(name: string): TBLShamelMartialState[] {
  const filterValue = name.toLowerCase();
  return this.List_TBLSHAMELMARTIALSTATE.filter(option => option.MartialState_Name.includes(filterValue));
}
private _filtered_SEX(name: string): TBLShamelSex[] {
  const filterValue = name.toLowerCase();
  return this.List_SEX.filter(option => option.Sex_Name.includes(filterValue));
}

private _filtered_Area(name: string): TBLShamelArea[] {
  const filterValue = name.toLowerCase();
  return this.List_AREA.filter(option => option.Area_Name.includes(filterValue));
}
private _filtered_MiniArea(name: string): TBLShamelMiniArea[] {
  const filterValue = name.toLowerCase();
  return this.List_TBLShamelMiniArea.filter(option => option.MiniArea_Name && option.MiniArea_Name.includes(filterValue) &&
  option.Area_ID == this.Selected_Employee.Area_ID );
}

private _filtered_NATIONALITY(name: string): TBLShamelNationality[] {
  const filterValue = name.toLowerCase();
  return this.List_NATIONALITY.filter(option => option.Nationality_Name && option.Nationality_Name.includes(filterValue)  );
}

public OnSelect_MARTIALSTATE_Change(event: MatAutocompleteSelectedEvent) {
  if (event  && this.Selected_Employee )
  {
    console.log( event.option.value);    
    this.Selected_Employee.MartialState_Name = ((event.option.value as TBLShamelMartialState).MartialState_Name) ;
  }     
}




public OnSelect_SEX_Change(event: MatAutocompleteSelectedEvent) {
  if (event  && this.Selected_Employee )
  {
    console.log( event.option.value);    
    this.Selected_Employee.Sex_Name = ((event.option.value as TBLShamelSex).Sex_Name) ;
  }     
}
public OnSelect_NATIONALITY_Change(event: MatAutocompleteSelectedEvent) {
  if (event  && this.Selected_Employee )
  {
    console.log( event.option.value);    
    this.Selected_Employee.Nationality_ID = ((event.option.value as TBLShamelNationality).Nationality_ID) ;
  }     
}

public OnSelect_AREA_Change(event: MatAutocompleteSelectedEvent) {
  if (event  && this.Selected_Employee )
  {
    console.log( event.option.value);    
    this.Selected_Employee.Area_ID = ((event.option.value as TBLShamelArea).Area_ID) ;
  }     
}

public OnSelect_STREETORVILLAGE_Change(event: MatAutocompleteSelectedEvent) {
  if (event  && this.Selected_Employee )
  {
    console.log( event.option.value);    
    this.Selected_Employee.StreetOrVillage_ID = ((event.option.value as TBLShamelStreetOrVillage).StreetOrVillage_ID) ;
  }     
}

public OnSelect_MINIAREA_Change(event: MatAutocompleteSelectedEvent) {
  if (event  && this.Selected_Employee )
  {
    console.log( event.option.value);    
    this.Selected_Employee.MiniArea_ID = ((event.option.value as TBLShamelMiniArea).MiniArea_ID) ;
  }     
}



public Display_MARTIALSTATE_Property(value:TBLShamelMartialState):string  {
  return value && value.MartialState_Name ? value.MartialState_Name : '';
}

public Display_SEX_Property(value:TBLShamelSex):string  {
  return value && value.Sex_Name ? value.Sex_Name : '';
}

public Display_NATIONALITY_Property(value:TBLShamelNationality):string  {
  return value && value.Nationality_Name ? value.Nationality_Name : '';
}

public Display_AREA_Property(value:TBLShamelArea):string  {
  return value && value.Area_Name ? value.Area_Name : '';
}

public Display_STREETORVILLAGE_Property(value:TBLShamelStreetOrVillage):string  {
  return value && value.StreetOrVillage_Name ? value.StreetOrVillage_Name : '';
}


public Display_MINIAREA_Property(value:TBLShamelMiniArea):string  {
  return value && value.MiniArea_Name ? value.MiniArea_Name : '';
}




  Save() {


  }

  FromControl2Object() {
    this.Selected_Employee.id = this.fcl_ID.value;
    this.Selected_Employee.Payrol_ID = this.fcl_PAYROL_ID.value;
    this.Selected_Employee.Computer_ID = this.fcl_COMPUTER_ID.value;
    this.Selected_Employee.Global_ID = this.fcl_GLOBAL_ID.value;
    this.Selected_Employee.Insurance_ID = this.fcl_INSURANCE_ID.value;
    this.Selected_Employee.FName = this.fcl_FNAME.value;
    this.Selected_Employee.LName = this.fcl_LNAME.value;
    this.Selected_Employee.Father = this.fcl_FATHER.value;
    this.Selected_Employee.Mother = this.fcl_MOTHER.value;
    this.Selected_Employee.Birth_Place = this.fcl_BIRTH_PLACE.value;

    this.Selected_Employee.BirthDate = moment(this.fcl_BIRTHDATE.value).format('dd/MM/yyyy');
    this.Selected_Employee.Kayd_Place = this.fcl_KAYD_PLACE.value;
    this.Selected_Employee.Sex_Name = this.fcl_SEX_NAME.value;
    this.Selected_Employee.Nationality_ID = this.fcl_NATIONALITY_ID.value;
    this.Selected_Employee.City_ID = this.fcl_CITY_ID.value;

    this.Selected_Employee.Area_ID = this.fcl_AREA_ID.value;
    this.Selected_Employee.MiniArea_ID = this.fcl_MINIAREA_ID.value;
    this.Selected_Employee.StreetOrVillage_ID = this.fcl_STREETORVILLAGE_ID.value;
    this.Selected_Employee.ManualAddress = this.fcl_MANUALADDRESS.value;
    this.Selected_Employee.MartialState_Name = this.fcl_MARTIALSTATE_NAME.value;
    this.Selected_Employee.PhoneNum = this.fcl_PHONENUM.value;
    this.Selected_Employee.ID_Number = this.fcl_ID_NUMBER.value;
    this.Selected_Employee.EducationLast_ID = this.fcl_EDUCATIONLAST_ID.value;
    this.Selected_Employee.JobStateFirst_ID = this.fcl_JOBSTATEFIRST_ID.value;
    this.Selected_Employee.MalakState_Name = this.fcl_MALAKSTATE_NAME.value;
    this.Selected_Employee.InsuranceSalary = this.fcl_INSURANCESALARY.value;
    this.Selected_Employee.Accounter_ID = this.fcl_ACCOUNTER_ID.value;
    this.Selected_Employee.AccounterSerial = this.fcl_ACCOUNTERSERIAL.value;
    this.Selected_Employee.Rem1 = this.fcl_REM1.value;
    this.Selected_Employee.Rem2 = this.fcl_REM2.value;
    this.Selected_Employee.Rem3 = this.fcl_REM3.value;
    this.Selected_Employee.Qarar_Num = this.fcl_QARAR_NUM.value;
    this.Selected_Employee.QararDate = moment(this.fcl_QARARDATE.value).format('dd/MM/yyyy');

  }

  Object2FromControl() {
    this.fcl_ID.setValue(this.Selected_Employee.id) ;
    this.fcl_PAYROL_ID.setValue(this.Selected_Employee.Payrol_ID);
    this.fcl_COMPUTER_ID.setValue(this.Selected_Employee.Computer_ID);
    this.fcl_GLOBAL_ID.setValue(this.Selected_Employee.Global_ID);
    this.fcl_INSURANCE_ID.setValue(this.Selected_Employee.Insurance_ID);
    this.fcl_FNAME.setValue(this.Selected_Employee.FName);
    this.fcl_LNAME.setValue(this.Selected_Employee.LName);
    this.fcl_FATHER.setValue(this.Selected_Employee.Father);
    this.fcl_MOTHER.setValue(this.Selected_Employee.Mother);
    this.fcl_BIRTH_PLACE.setValue(this.Selected_Employee.Birth_Place);

    this.fcl_BIRTHDATE.setValue( moment(this.Selected_Employee.BirthDate).toDate()  );
    this.fcl_KAYD_PLACE.setValue(this.Selected_Employee.Kayd_Place);
    this.fcl_SEX_NAME.setValue(this.Selected_Employee.Sex_Name);
    this.fcl_NATIONALITY_ID.setValue(this.Selected_Employee.Nationality_ID);
    this.fcl_CITY_ID.setValue(this.Selected_Employee.City_ID);

    this.fcl_AREA_ID.setValue(this.Selected_Employee.Area_ID);
    this.fcl_MINIAREA_ID.setValue(this.Selected_Employee.MiniArea_ID);
    this.fcl_STREETORVILLAGE_ID.setValue(this.Selected_Employee.StreetOrVillage_ID);
    this.fcl_MANUALADDRESS.setValue(this.Selected_Employee.ManualAddress);
    this.fcl_MARTIALSTATE_NAME.setValue(this.Selected_Employee.MartialState_Name);
    this.fcl_PHONENUM.setValue(this.Selected_Employee.PhoneNum);
    this.fcl_ID_NUMBER.setValue(this.Selected_Employee.ID_Number);
    this.fcl_EDUCATIONLAST_ID.setValue(this.Selected_Employee.EducationLast_ID);
    this.fcl_JOBSTATEFIRST_ID.setValue(this.Selected_Employee.JobStateFirst_ID);
    this.fcl_MALAKSTATE_NAME.setValue(this.Selected_Employee.MalakState_Name);
    this.fcl_INSURANCESALARY.setValue(this.Selected_Employee.InsuranceSalary);
    this.fcl_ACCOUNTER_ID.setValue(this.Selected_Employee.Accounter_ID);
    this.fcl_ACCOUNTERSERIAL.setValue(this.Selected_Employee.AccounterSerial);
    this.fcl_REM1.setValue(this.Selected_Employee.Rem1);
    this.fcl_REM2.setValue(this.Selected_Employee.Rem2);
    this.fcl_REM3.setValue(this.Selected_Employee.Rem3);
    this.fcl_QARAR_NUM.setValue(this.Selected_Employee.Qarar_Num);
    this.fcl_QARARDATE.setValue(moment(this.Selected_Employee.QararDate).toDate());

  }

  
     // Helper Function For Display Validate in Html Template
     public hasError = (controlName: string, errorName: string) =>{
      return this.Form.controls[controlName].hasError(errorName);
    }
}
