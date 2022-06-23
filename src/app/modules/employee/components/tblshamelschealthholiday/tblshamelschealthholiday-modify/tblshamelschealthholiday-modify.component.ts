import { Component, Inject, OnInit } from '@angular/core';

import * as _moment from 'moment';
import { Moment } from 'moment';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ITBLShamelSCHealthHoliday } from'../../../../shared/models/employees_department/ITBLShamelSCHealthHoliday';
import { ITBLShamelDocumentType } from'../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { map, Observable, startWith } from 'rxjs';
import { ITBLShamelDoctor } from'../../../../shared/models/employees_department/ITBLShamelDoctor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGlobalEmployeeList } from'../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TblshameldocumenttypeService } from'../../../../shared/services/employees_department/tblshameldocumenttype.service';
import { TBLShamelSCHealthHolidayService } from'../../../../shared/services/employees_department/tblshamel-schealth-holiday.service';
import { TBLShamelDoctorService } from'../../../../shared/services/employees_department/tblshamel-doctor.service';
const moment = _moment;

@Component({
  selector: 'app-tblshamelschealthholiday-modify',
  templateUrl: './tblshamelschealthholiday-modify.component.html',
  styleUrls: ['./tblshamelschealthholiday-modify.component.scss']
})
export class TblshamelschealthholidayModifyComponent implements OnInit {

  //Link To Employee 
  id:number;
  Selected_Employee_SCHealthHoliday :ITBLShamelSCHealthHoliday;

  //Array Of AutoComplere With Filter
  
  Doctor_List :ITBLShamelDoctor[]=[];
  filteredDoctorOptions: Observable<ITBLShamelDoctor[]>;  

  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;

 
  
  // Access To Element in Form
  Form: FormGroup ;
  duration   = new FormControl();
  startdate = new FormControl();
  enddate = new FormControl();
  sick = new FormControl();
  doctor_id= new FormControl();
  documenttype_id = new FormControl();
  document_number = new FormControl();
  documentdate = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelSCHealthHoliday,id:number},
    public GlobalList:IGlobalEmployeeList,

    public ShamelHealthHolidayService:TBLShamelSCHealthHolidayService,    
    public ShamelDoctorService:TBLShamelDoctorService,
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {

    this.loading = true;
    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_SCHealthHoliday = data.obj;
    }
    console.log(IGlobalEmployeeList.TBLShamelBonusList  );

    if (!this.ShamelDoctorService.TBLShamelDoctor_List || this.ShamelDoctorService.TBLShamelDoctor_List.length ==0)
    {
      this.ShamelDoctorService.fill();
      this.ShamelDoctorService.list().subscribe
      (data=> 
        {
          this.Doctor_List = data as ITBLShamelDoctor[];
        })

    }
      
      
    
    if (IGlobalEmployeeList.TBLShamelDocumentTypeList  && IGlobalEmployeeList.TBLShamelDocumentTypeList.length>0)
    {
      this.DocumentType_List = IGlobalEmployeeList.TBLShamelDocumentTypeList;
    }


    
    this.BuildForm();
    this.SetValue();
    

  
   }
   //#endregion

   //#region  Init Component

   ngOnInit(): void {
   
     this.SetValue();
  }


  ngAfterViewInit() {
   
    this.SetValue();
  }

  
    public async FillArrayUsingService()
   {
     try{

      if (!this.ShamelDoctorService.TBLShamelDoctor_List || this.ShamelDoctorService.TBLShamelDoctor_List.length ==0)
    {
      this.ShamelDoctorService.fill();
      this.ShamelDoctorService.list().subscribe
      (data=> 
        {
          this.Doctor_List = data as ITBLShamelDoctor[];
        })

    }
    

       if (!this.DocumentType_List || this.DocumentType_List.length<=0)
       {
         
        this.ShameldocumenttypeService.list().subscribe(
          (data:any)=> {
            this.loading = false;
            this.DocumentType_List=data;      
          });


      
       }
       
       this.filteredDocumentTypeOptions = this.documenttype_id.valueChanges
       .pipe(
         startWith(''),        
         map(value => value   && typeof value === 'string'  ? this._filteredDocumentType(value) : this.DocumentType_List.slice() )
       );  
     

       this.filteredDoctorOptions = this.doctor_id.valueChanges
       .pipe(
         startWith(''),        
         map(value => value   && typeof value === 'string'  ? this._filteredDoctor(value) : this.Doctor_List.slice() )
       );  
     
   
       
     }catch(Exception : any)
     {}


    
      
   

    

   }
  

    //#region Filter Of  

    private _filteredDoctor(value: string): ITBLShamelDoctor[] {    
      if (value)
      {
      const filterValue = value ;
      return this.Doctor_List.filter(obj => obj.doctor_name.includes(filterValue) );
      }
      return this.Doctor_List.slice();
    }
  
    private _filteredDocumentType(value: string): ITBLShamelDocumentType[] {    
      if (value)
      {
        const filterValue = value ;
        return this.DocumentType_List.filter(obj => obj.documenttype_name.includes(filterValue) );
  
      }
      return this.DocumentType_List.slice();
    }
    
    //#endregion

   public BuildForm()
   {
     try{  
   
    if (this.Selected_Employee_SCHealthHoliday && 
        this.Selected_Employee_SCHealthHoliday.serial>0)
    {

    
      this.duration   = new FormControl({value: this.Selected_Employee_SCHealthHoliday.duration, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.startdate  = new FormControl(moment(this.Selected_Employee_SCHealthHoliday.startdate) ,[ Validators.required ]);
      this.enddate = new FormControl({value:moment( this.Selected_Employee_SCHealthHoliday.enddate), disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl(this.Selected_Employee_SCHealthHoliday.document_number,[ Validators.required ]);
      this.doctor_id = new FormControl(this.Selected_Employee_SCHealthHoliday.doctor_id ,[ Validators.required ]);
      this.documenttype_id   = new FormControl(this.Selected_Employee_SCHealthHoliday.documenttype_id ,[ Validators.required ]);
      this.document_number   = new FormControl(this.Selected_Employee_SCHealthHoliday.document_number ,[ Validators.required ]);      
      this.documentdate = new FormControl(moment(this.Selected_Employee_SCHealthHoliday.documentdate) ,[ Validators.required ]);
    
    }else
    {
      this.duration   = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.startdate  = new FormControl( [ Validators.required ]);
      this.enddate = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl([ Validators.required ]);
      this.doctor_id  = new FormControl([ Validators.required ]);
      this.documenttype_id   = new FormControl([ Validators.required ]);
      this.document_number   = new FormControl([ Validators.required ]);      
      this.documentdate = new FormControl([ Validators.required ]);

    
    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('duration',this.duration);        
        this.Form .addControl('startdate',this.startdate);
        this.Form .addControl('enddate',this.enddate);
        this.Form .addControl('reason_id',this.doctor_id);
        
        this.Form .addControl('documenttype_id',this.documenttype_id);
        this.Form .addControl('documentdate',this.documentdate);        
        this.Form .addControl('document_number',this.document_number);
        
      }catch(Exception:any){
        console.log(Exception);
      }
   }
   //#endregion


  


  //#region SetValue And GetValue Function
  public ClearForm()
  {
    try{
      console.log('ClearForm');
      this.duration.reset();
      this.startdate.reset();
      this.enddate.reset();
      this.doctor_id.reset();
      this.documentdate.reset();
      this.document_number.reset();
      this.documenttype_id.reset();    

  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
    

 
this.Form.patchValue(
  {
    
    doctor_id:this.Selected_Employee_SCHealthHoliday.doctor_id,
    duration:this.Selected_Employee_SCHealthHoliday.duration,
    startdate:moment(this.Selected_Employee_SCHealthHoliday.startdate),
    enddate:moment(this.Selected_Employee_SCHealthHoliday.enddate),
    documenttype_id:this.Selected_Employee_SCHealthHoliday.documenttype_id,   
    documentdate:moment(this.Selected_Employee_SCHealthHoliday.documentdate) ,
    document_number:this.Selected_Employee_SCHealthHoliday.document_number,
    
  }
);

this.doctor_id.setValue( this.Selected_Employee_SCHealthHoliday.doctor_id);

this.duration.setValue(this.Selected_Employee_SCHealthHoliday.duration);
this.startdate.setValue(moment(this.Selected_Employee_SCHealthHoliday.startdate));
this.enddate.setValue(moment(this.Selected_Employee_SCHealthHoliday.enddate));
this.documenttype_id.setValue(this.Selected_Employee_SCHealthHoliday.documenttype_id);    
this.documentdate.setValue(moment(this.Selected_Employee_SCHealthHoliday.documentdate));
this.document_number.setValue(this.Selected_Employee_SCHealthHoliday.document_number);

this.doctor_id.setValue(this.Selected_Employee_SCHealthHoliday.doctor_id);

   

this.loading = false; 
 

this.doctor_id.setValue( this.Selected_Employee_SCHealthHoliday.doctor_id);

this.duration.setValue(this.Selected_Employee_SCHealthHoliday.duration);
this.startdate.setValue(moment(this.Selected_Employee_SCHealthHoliday.startdate));
this.enddate.setValue(moment(this.Selected_Employee_SCHealthHoliday.enddate));
this.documenttype_id.setValue(this.Selected_Employee_SCHealthHoliday.documenttype_id);    
this.documentdate.setValue(moment(this.Selected_Employee_SCHealthHoliday.documentdate));
this.document_number.setValue(this.Selected_Employee_SCHealthHoliday.document_number);

this.document_number.setValue(this.Selected_Employee_SCHealthHoliday.document_number);

  

  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCHealthHoliday )
{
 
  this.Selected_Employee_SCHealthHoliday.id = this.id;
    this.Selected_Employee_SCHealthHoliday.doctor_id = this.doctor_id.value;
    this.Selected_Employee_SCHealthHoliday.duration = this.duration.value;
    this.Selected_Employee_SCHealthHoliday.enddate =moment(this.enddate.value ).format('YYYY/MM/DD');; 
    this.Selected_Employee_SCHealthHoliday.startdate =  moment(this.startdate.value).format('YYYY/MM/DD');
    this.Selected_Employee_SCHealthHoliday.documenttype_id = this.documenttype_id.value;        
    this.Selected_Employee_SCHealthHoliday.document_number = this.document_number.value;
    this.Selected_Employee_SCHealthHoliday.documentdate = moment(this.documentdate.value).format('YYYY/MM/DD');
    
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectDoctorChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_SCHealthHoliday )
      this.Selected_Employee_SCHealthHoliday.doctor_id = event.option.value;  
  }


  public OnSelectDocumentTypeChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCHealthHoliday )
      this.Selected_Employee_SCHealthHoliday.documenttype_id = event.option.value;  
  }

  

  //#endregion


  //#region  Display Display Member
  public displayDocumentTypeProperty(value:string):string  {
    if (value && this.DocumentType_List){     
      let documentType:any = this.DocumentType_List.find(crs => crs.documenttype_id.toString() == value) ;
      if (documentType)
      return documentType.documenttype_name;
    }
    return '';
  }


  public displayDoctorProperty(value:string):string  {
    if (value && this.Doctor_List ){

      let freeholidayreason:any = this.Doctor_List.find(spec => spec.doctor_name.toString() == value) ;
      if (freeholidayreason )
      return freeholidayreason.freeholidayreason_name;
    }
    return '';
  }




 

  public ClearObject()
  {
    if (!this.Selected_Employee_SCHealthHoliday)
    this.Selected_Employee_SCHealthHoliday = new ITBLShamelSCHealthHoliday();
  
    this.Selected_Employee_SCHealthHoliday.id= this.id ; 
  }

  public async Save()
  {
 
    this.submitted = true;

   
    console.log("this.Form.invalid"+this.Form.errors);

    /*
    if (this.Form.invalid == true) {
      return;
    }
*/
    this.getValue();

    if (this.Selected_Employee_SCHealthHoliday  &&
      this.Selected_Employee_SCHealthHoliday.serial<=0)
      {

      if (this.ValidateForm())
        this.ShamelHealthHolidayService.add(this.Selected_Employee_SCHealthHoliday).toPromise().then(res => {
          console.log(res)
          if (res == 1)
        {
          this.ClearObject();
          this.ClearForm();
        }else
        {



        }
    });
  }
   else if (this.Selected_Employee_SCHealthHoliday  &&
             this.Selected_Employee_SCHealthHoliday.serial>0)
             {
               console.log('update');
               console.log(this.Selected_Employee_SCHealthHoliday);

      this.ShamelHealthHolidayService.update(this.Selected_Employee_SCHealthHoliday).toPromise().then(res => {
        console.log(res)
        if (res == 1)
        {
          this.getValue();

        }else
        {
        }
    });

  }
  }


  public ValidateForm():boolean
  {
    let result : boolean = true;



    if (!this.doctor_id.value || this.doctor_id.value <=0)
    {
      console.log('error1');
      this.doctor_id.setErrors({ invalid: true ,required:true});
      result = false;
      
    }
      
    if (!this.duration.value || this.duration.value<=0)
    {
      console.log('error2');
      this.duration.setErrors({'Phone Number does not exist.': true});
      result = false;

    }

    
    if (!this.documenttype_id.value || this.documenttype_id.value<=0)
    {
      console.log('error2');
      this.documenttype_id.setErrors({'Phone Number does not exist.': true});
      result = false;

    }

    console.log("result vaildarw"+result);
    return result;
    
  }

  public onReset(): void {
    this.submitted = false;
    this.Form.reset();
  }
/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.Form.controls[control].hasError(error);
}



addEventDocumentDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_Employee_SCHealthHoliday.documentdate = moment(event.value).format('YYYY/MM/DD');

}


addEventStartDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_Employee_SCHealthHoliday.startdate = moment(event.value).format('YYYY/MM/DD');

}



addEventEndDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_Employee_SCHealthHoliday.enddate = moment(event.value).format('YYYY/MM/DD');

}



}
