import { EditEmployeeCardComponent } from './../../tblshamelemployee/edit-employee-card/edit-employee-card.component';
import { TBLShamelFreeHolidayReasonService } from '../../../../shared/services/employees_department/tblshamel-free-holiday-reason.service';
import { TBLShamelSCFreeHolidayService } from '../../../../shared/services/employees_department/tblshamel-scfree-holiday.service';
import { ITBLShamelSCFreeHoliday } from '../../../../shared/models/employees_department/ITBLShamelSCFreeHoliday';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITBLShamelFreeHolidayReason } from '../../../../shared/models/employees_department/ITBLShamelFreeHolidayReason';
import { ITBLShamelDocumentType } from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';
import { map, startWith } from 'rxjs/operators';

import * as _moment from 'moment';
import { Moment } from 'moment';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

const moment = _moment;


@Component({
  selector: 'app-tblshamelscfreeholidaymodify',
  templateUrl: './tblshamelscfreeholidaymodify.component.html',
  styleUrls: ['./tblshamelscfreeholidaymodify.component.scss']
})
export class TblshamelscfreeholidaymodifyComponent implements OnInit,AfterViewInit {

  //Link To Employee 
  id:number;
  Selected_Employee_SCFreeHoliday :ITBLShamelSCFreeHoliday;

  //Array Of AutoComplere With Filter
  
  FreeHolidayReason_List :ITBLShamelFreeHolidayReason[]=[];
  filteredFreeHolidayReasonOptions: Observable<ITBLShamelFreeHolidayReason[]>;  

  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;


  
  // Access To Element in Form
  Form: FormGroup ;
  duration   = new FormControl();
  startdate = new FormControl();
  enddate = new FormControl();
  reason_id = new FormControl();
  documenttype_id = new FormControl();
  document_number = new FormControl();
  documentdate = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelSCFreeHoliday,id:number},
    public GlobalList:IGlobalEmployeeList,
    public ShamelSCFreeHolidayService:TBLShamelSCFreeHolidayService,
    public ShamelFreeHolidayReasonService:TBLShamelFreeHolidayReasonService,    
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {
    this.loading = true;
    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_SCFreeHoliday = data.obj;
    }
    console.log(IGlobalEmployeeList.TBLShamelBonusList  );

    if (IGlobalEmployeeList.TBLShamelFreeHolidayReasonList  && IGlobalEmployeeList.TBLShamelFreeHolidayReasonList.length>0)
    {
      this.FreeHolidayReason_List = IGlobalEmployeeList.TBLShamelFreeHolidayReasonList;
    }

    if (IGlobalEmployeeList.TBLShamelDocumentTypeList  && IGlobalEmployeeList.TBLShamelDocumentTypeList.length>0)
    {
      this.DocumentType_List = IGlobalEmployeeList.TBLShamelDocumentTypeList;
    }


    this.FillArrayUsingService();
    this.BuildForm();
    this.SetValue();
    

  
   }
   //#endregion

   //#region  Init Component

   ngOnInit(): void {
    this.FillArrayUsingService();
    console.log('ngOnInit');
     this.SetValue();
  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.SetValue();
  }

  
    public async FillArrayUsingService()
   {
     try{

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
     
     }catch(Exception : any)
     {}


     try{
      if (!this.FreeHolidayReason_List || this.FreeHolidayReason_List.length<=0)
      {
       this.ShamelFreeHolidayReasonService.list().subscribe(
         (data:any)=> {
           this.loading = false;
           this.FreeHolidayReason_List=data;      
         });


     
      }
      
      this.filteredFreeHolidayReasonOptions = this.reason_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredFreeHolidayReason(value) : this.FreeHolidayReason_List.slice() )
      );  
    
    }catch(Exception : any)
    {}


    

   }
  
   public BuildForm()
   {
     try{  
      console.log('Build Form' );  
       console.log(this.Selected_Employee_SCFreeHoliday );  
    if (this.Selected_Employee_SCFreeHoliday && this.Selected_Employee_SCFreeHoliday.serial>0)
    {

    
      this.duration   = new FormControl({value: this.Selected_Employee_SCFreeHoliday.duration, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.startdate  = new FormControl(moment(this.Selected_Employee_SCFreeHoliday.startdate) ,[ Validators.required ]);
      this.enddate = new FormControl({value:moment( this.Selected_Employee_SCFreeHoliday.enddate), disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl(this.Selected_Employee_SCFreeHoliday.document_number,[ Validators.required ]);
      this.reason_id  = new FormControl(this.Selected_Employee_SCFreeHoliday.reason_id ,[ Validators.required ]);
      this.documenttype_id   = new FormControl(this.Selected_Employee_SCFreeHoliday.documenttype_id ,[ Validators.required ]);
      this.document_number   = new FormControl(this.Selected_Employee_SCFreeHoliday.document_number ,[ Validators.required ]);      
      this.documentdate = new FormControl(moment(this.Selected_Employee_SCFreeHoliday.documentdate) ,[ Validators.required ]);
    
    }else
    {
      this.duration   = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.startdate  = new FormControl( [ Validators.required ]);
      this.enddate = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl([ Validators.required ]);
      this.reason_id  = new FormControl([ Validators.required ]);
      this.documenttype_id   = new FormControl([ Validators.required ]);
      this.document_number   = new FormControl([ Validators.required ]);      
      this.documentdate = new FormControl([ Validators.required ]);

    
    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('duration',this.duration);        
        this.Form .addControl('startdate',this.startdate);
        this.Form .addControl('enddate',this.enddate);
        this.Form .addControl('reason_id',this.reason_id);
        
        this.Form .addControl('documenttype_id',this.documenttype_id);
        this.Form .addControl('documentdate',this.documentdate);        
        this.Form .addControl('document_number',this.document_number);
        
      }catch(Exception:any){
        console.log(Exception);
      }
   }
   //#endregion


   //#region Filter Of  

   private _filteredFreeHolidayReason(value: string): ITBLShamelFreeHolidayReason[] {    
    if (value)
    {
    const filterValue = value ;
    return this.FreeHolidayReason_List.filter(obj => obj.freeholidayreason_name.includes(filterValue) );
    }
    return this.FreeHolidayReason_List.slice();
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


  //#region SetValue And GetValue Function
  public ClearForm()
  {
    try{
      console.log('ClearForm');
      this.duration.reset();
      this.startdate.reset();
      this.enddate.reset();
      this.reason_id.reset();
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
      console.log(this.Selected_Employee_SCFreeHoliday);
//if (this.Selected_Employee_SCFreeHoliday )
{
  console.log('set value');
  console.log(this.FreeHolidayReason_List);
  
this.Form.patchValue(
  {
    
    reason_id:this.Selected_Employee_SCFreeHoliday.reason_id,
    duration:this.Selected_Employee_SCFreeHoliday.duration,
    startdate:moment(this.Selected_Employee_SCFreeHoliday.startdate),
    enddate:moment(this.Selected_Employee_SCFreeHoliday.enddate),
    documenttype_id:this.Selected_Employee_SCFreeHoliday.documenttype_id,   
    documentdate:moment(this.Selected_Employee_SCFreeHoliday.documentdate) ,
    document_number:this.Selected_Employee_SCFreeHoliday.document_number,
    
  }
);

this.reason_id.setValue( this.Selected_Employee_SCFreeHoliday.reason_id);

this.duration.setValue(this.Selected_Employee_SCFreeHoliday.duration);
this.startdate.setValue(moment(this.Selected_Employee_SCFreeHoliday.startdate));
this.enddate.setValue(moment(this.Selected_Employee_SCFreeHoliday.enddate));
this.documenttype_id.setValue(this.Selected_Employee_SCFreeHoliday.documenttype_id);    
this.documentdate.setValue(moment(this.Selected_Employee_SCFreeHoliday.documentdate));
this.document_number.setValue(this.Selected_Employee_SCFreeHoliday.document_number);

this.reason_id.setValue(this.Selected_Employee_SCFreeHoliday.reason_id);

   

//    this.startdate.setValue(  moment(this.Selected_Employee_SCFreeHoliday.startdate).format('YYYY/MM/DD') );
//    this.enddate.setValue(moment(this.Selected_Employee_SCFreeHoliday.enddate).format('YYYY/MM/DD') );

  }
  this.loading = false; 
  console.log('complete');

  this.reason_id.setValue( this.Selected_Employee_SCFreeHoliday.reason_id);

  this.duration.setValue(this.Selected_Employee_SCFreeHoliday.duration);
  this.startdate.setValue(moment(this.Selected_Employee_SCFreeHoliday.startdate));
  this.enddate.setValue(moment(this.Selected_Employee_SCFreeHoliday.enddate));
  this.documenttype_id.setValue(this.Selected_Employee_SCFreeHoliday.documenttype_id);    
  this.documentdate.setValue(moment(this.Selected_Employee_SCFreeHoliday.documentdate));
  this.document_number.setValue(this.Selected_Employee_SCFreeHoliday.document_number);
  
  console.log('fdgsd fgsd');
  console.log(this.Selected_Employee_SCFreeHoliday.document_number);

  this.document_number.setValue(this.Selected_Employee_SCFreeHoliday.document_number);


  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCFreeHoliday )
{
  console.log( this.reason_id);
  this.Selected_Employee_SCFreeHoliday.id = this.id;
    this.Selected_Employee_SCFreeHoliday.reason_id = this.reason_id.value;
    this.Selected_Employee_SCFreeHoliday.duration = this.duration.value;
    this.Selected_Employee_SCFreeHoliday.enddate =moment(this.enddate.value ).format('YYYY/MM/DD');; 
    this.Selected_Employee_SCFreeHoliday.startdate =  moment(this.startdate.value).format('YYYY/MM/DD');
    this.Selected_Employee_SCFreeHoliday.documenttype_id = this.documenttype_id.value;        
    this.Selected_Employee_SCFreeHoliday.document_number = this.document_number.value;
    this.Selected_Employee_SCFreeHoliday.documentdate = moment(this.documentdate.value).format('YYYY/MM/DD');
    
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectFreeHolidayReasonChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_SCFreeHoliday )
      this.Selected_Employee_SCFreeHoliday.reason_id = event.option.value;  
  }


  public OnSelectDocumentTypeChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCFreeHoliday )
      this.Selected_Employee_SCFreeHoliday.documenttype_id = event.option.value;  
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


  public displayFreeHolidayReasonProperty(value:string):string  {
    if (value && this.FreeHolidayReason_List ){

      let freeholidayreason:any = this.FreeHolidayReason_List.find(spec => spec.freeholidayreason_id.toString() == value) ;
      if (freeholidayreason )
      return freeholidayreason.freeholidayreason_name;
    }
    return '';
  }




 

  public ClearObject()
  {
    if (!this.Selected_Employee_SCFreeHoliday)
    this.Selected_Employee_SCFreeHoliday = new ITBLShamelSCFreeHoliday();
    this.Selected_Employee_SCFreeHoliday.init();  
    this.Selected_Employee_SCFreeHoliday.id= this.id ; 
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

    if (this.Selected_Employee_SCFreeHoliday  &&
      this.Selected_Employee_SCFreeHoliday.serial<=0)
      {

      if (this.ValidateForm())
        this.ShamelSCFreeHolidayService.add(this.Selected_Employee_SCFreeHoliday).toPromise().then(res => {
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
   else if (this.Selected_Employee_SCFreeHoliday  &&
             this.Selected_Employee_SCFreeHoliday.serial>0)
             {
               console.log('update');
               console.log(this.Selected_Employee_SCFreeHoliday);

      this.ShamelSCFreeHolidayService.update(this.Selected_Employee_SCFreeHoliday).toPromise().then(res => {
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



    if (!this.reason_id.value || this.reason_id.value <=0)
    {
      console.log('error1');
      this.reason_id.setErrors({ invalid: true ,required:true});
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
      this.reason_id.setErrors({'Phone Number does not exist.': true});
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

  this.Selected_Employee_SCFreeHoliday.documentdate = moment(event.value).format('YYYY/MM/DD');

}


addEventStartDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_Employee_SCFreeHoliday.startdate = moment(event.value).format('YYYY/MM/DD');

}



addEventEndDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_Employee_SCFreeHoliday.enddate = moment(event.value).format('YYYY/MM/DD');

}



}
