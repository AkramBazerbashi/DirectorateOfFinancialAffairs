

import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { TBLShamelSCCancelPunishmentService } from '../../../../shared/services/employees_department/tblshamel-sccancel-punishment.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import * as _moment from 'moment';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ITBLShamelSCCancelPunishment } from '../../../../shared/models/employees_department/ITBLShamelSCCancelPunishment';
import { ITBLShamelDocumentType } from 'src/app/modules/shared/models/employees_department/ITBLShamelDocumentType';
import { ITBLShamelPunishment } from 'src/app/modules/shared/models/employees_department/ITBLShamelPunishment';
import { ITBLShamelPunishmentReason } from 'src/app/modules/shared/models/employees_department/ITBLShamelPunishmentReason';
import { ITBLShamelSCPunishment } from 'src/app/modules/shared/models/employees_department/ITBLShamelSCPunishment';
import { IGlobalEmployeeList } from 'src/app/modules/shared/services/employees_department/IGlobalEmployeeList';
import { TBLShamelPunishmentReasonService } from 'src/app/modules/shared/services/employees_department/tblshamel-punishment-reason.service';
import { TBLShamelPunishmentService } from 'src/app/modules/shared/services/employees_department/tblshamel-punishment.service';
import { TblshameldocumenttypeService } from 'src/app/modules/shared/services/employees_department/tblshameldocumenttype.service';
const moment = _moment;


@Component({
  selector: 'app-tblshamelsccancelpunishmentmodify',
  templateUrl: './tblshamelsccancelpunishmentmodify.component.html',
  styleUrls: ['./tblshamelsccancelpunishmentmodify.component.scss']
})
export class TblshamelsccancelpunishmentmodifyComponent implements OnInit,AfterViewInit {

  //Link To Employee 
  id:number;
 
  Selected_Employee_SCPunishment :ITBLShamelSCPunishment;
  Selected_Employee_SCCancelPunishment :ITBLShamelSCCancelPunishment;

  //Array Of AutoComplere With Filter
  
  TBLShamelPunishment_List :ITBLShamelPunishment[]=[];
  filteredPunishmentOptions: Observable<ITBLShamelPunishment[]>;

  TBLShamelPunishmentReason_List :ITBLShamelPunishmentReason[]=[];
  filteredPunishmentReasonOptions: Observable<ITBLShamelPunishmentReason[]>;
  

  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;


  
  // Access To Element in Form
  Form: FormGroup ;
  punishment_id   = new FormControl();
  reason_id = new FormControl();
  documenttype_id = new FormControl();
  document_number = new FormControl();
  documentdate = new FormControl();
 

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {Parent:ITBLShamelSCPunishment , obj:ITBLShamelSCCancelPunishment ,id:number},
    public GlobalList:IGlobalEmployeeList,
    public SCCancelPunishmentService:TBLShamelSCCancelPunishmentService,
    public ShamelPunishmentService:TBLShamelPunishmentService,    
    public PunishmentReasonService:TBLShamelPunishmentReasonService,    
    public ShameldocumenttypeService:TblshameldocumenttypeService ,

    private fb: FormBuilder
  ) {
    this.loading = true;
    console.log("constuctor");
    if (data && data.obj && data.id > 0)
    { 
      

      this.id = data.id;     

      this.Selected_Employee_SCPunishment = data.Parent;
      if (this.Selected_Employee_SCPunishment.cancel_document_id > 0 )
      {
        this.Selected_Employee_SCCancelPunishment.serial_punishment = this.Selected_Employee_SCPunishment.serial;
      }
        
      this.Selected_Employee_SCCancelPunishment = data.obj;
      this.Selected_Employee_SCCancelPunishment.serial_punishment = this.Selected_Employee_SCPunishment.serial;

      console.log(this.Selected_Employee_SCCancelPunishment);
      console.log(this.Selected_Employee_SCCancelPunishment  );
      
    }
    

    if (IGlobalEmployeeList.TBLShamelPunishmentList  && IGlobalEmployeeList.TBLShamelPunishmentList.length>0)
    {
      this.TBLShamelPunishment_List = IGlobalEmployeeList.TBLShamelPunishmentList;
    }

    if (IGlobalEmployeeList.TBLShamelDocumentTypeList  && IGlobalEmployeeList.TBLShamelDocumentTypeList.length>0)
    {
      this.DocumentType_List = IGlobalEmployeeList.TBLShamelDocumentTypeList;
    }

    if (IGlobalEmployeeList.TBLShamelPunishmentReasonList  && IGlobalEmployeeList.TBLShamelPunishmentReasonList.length>0)
    {
      this.TBLShamelPunishmentReason_List = IGlobalEmployeeList.TBLShamelPunishmentReasonList;
    }
    console.log(this.TBLShamelPunishmentReason_List);
    console.log(this.DocumentType_List);
    console.log(this.TBLShamelPunishment_List);

    this.FillArrayUsingService();
    this.BuildForm();
    this.SetValue();
    

  
   }
   //#endregion

   //#region  Init Component

   ngOnInit(): void {

  }


  ngAfterViewInit() {

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
      if (!this.TBLShamelPunishment_List || this.TBLShamelPunishment_List.length<=0)
      {
        
       this.ShamelPunishmentService.list().subscribe(
         (data:any)=> {
           this.loading = false;
           this.TBLShamelPunishment_List=data;      
         });


     
      }
      
      this.filteredPunishmentOptions = this.punishment_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredPunishment(value) : this.TBLShamelPunishment_List.slice() )
      );  
    
    }catch(Exception : any)
    {}


    try{
      if (!this.TBLShamelPunishmentReason_List || this.TBLShamelPunishmentReason_List.length<=0)
      {
       this.PunishmentReasonService.list().subscribe(
         (data:any)=> {
           this.loading = false;
           this.TBLShamelPunishmentReason_List=data;      
         });


     
      }
      
      this.filteredPunishmentReasonOptions = this.reason_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredPunishmentReason(value) : this.TBLShamelPunishmentReason_List.slice() )
      );  
    
    }catch(Exception : any)
    {}

   }
  
   public BuildForm()
   {
     try{  
      console.log('Build Form' );  
       console.log(this.Selected_Employee_SCPunishment );  
    if (this.Selected_Employee_SCCancelPunishment  && this.Selected_Employee_SCCancelPunishment .serial>0)
    {

    
      this.punishment_id   = new FormControl({value: this.Selected_Employee_SCCancelPunishment .punishment_id, disabled: false},[Validators.required, Validators.minLength(5)]);            
      this.reason_id  = new FormControl(this.Selected_Employee_SCCancelPunishment .reason_id ,[ Validators.required ]);
      this.documenttype_id   = new FormControl(this.Selected_Employee_SCCancelPunishment .documenttype_id ,[ Validators.required ]);
      this.document_number = new FormControl(this.Selected_Employee_SCCancelPunishment .document_number,[ Validators.required ]);      
      this.documentdate = new FormControl(moment(this.Selected_Employee_SCCancelPunishment .documentdate) ,[ Validators.required ]);
    
    }else
    {
      this.punishment_id   = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.reason_id  = new FormControl( [ Validators.required ]);
      this.documenttype_id = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl([ Validators.required ]);            
      this.documentdate = new FormControl([ Validators.required ]);

    
    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('punishment_id',this.punishment_id);        
        this.Form .addControl('reason_id',this.reason_id);
        this.Form .addControl('documenttype_id',this.documenttype_id);
        this.Form .addControl('document_number',this.document_number);
        this.Form .addControl('documentdate',this.documentdate);              
        
      }catch(Exception:any){
        console.log(Exception);
      }
   }
   //#endregion


   //#region Filter Of  

   private _filteredPunishment(value: string): ITBLShamelPunishment[] {  
     console.log('_filteredPunishment');  
    if (value)
    {
    const filterValue = value ;
    return this.TBLShamelPunishment_List.filter(obj => obj.punishment_name.includes(filterValue) );
    }
    return this.TBLShamelPunishment_List.slice();
  }

   private _filteredPunishmentReason(value: string): ITBLShamelPunishmentReason[] {    
    if (value)
    {
    const filterValue = value ;
    return this.TBLShamelPunishmentReason_List.filter(obj => obj.punishmentreason_name.includes(filterValue) );
    }
    return this.TBLShamelPunishmentReason_List.slice();
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
      this.punishment_id.reset();
      this.reason_id.reset();
      this.documenttype_id.reset();
    
      this.documentdate.reset();
      this.document_number.reset();
     

  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
      
//if (this.Selected_Employee_SCPunishment )
{
  console.log('set value');
  
  
this.Form.patchValue(
  {
    
    reason_id:this.Selected_Employee_SCCancelPunishment .reason_id,
    punishment_id:this.Selected_Employee_SCCancelPunishment .punishment_id,    
    documenttype_id:this.Selected_Employee_SCCancelPunishment .documenttype_id,   
    documentdate:moment(this.Selected_Employee_SCCancelPunishment .documentdate) ,
    document_number:this.Selected_Employee_SCCancelPunishment .document_number,
    
  }
);

this.reason_id.setValue( this.Selected_Employee_SCCancelPunishment .reason_id);

this.reason_id.setValue(this.Selected_Employee_SCCancelPunishment .reason_id);

this.documenttype_id.setValue(this.Selected_Employee_SCCancelPunishment .documenttype_id);    
this.documentdate.setValue(moment(this.Selected_Employee_SCCancelPunishment .documentdate));
this.document_number.setValue(this.Selected_Employee_SCCancelPunishment .document_number);

this.reason_id.setValue(this.Selected_Employee_SCCancelPunishment .reason_id);

   

//    this.startdate.setValue(  moment(this.Selected_Employee_SCPunishment.startdate).format('YYYY/MM/DD') );
//    this.enddate.setValue(moment(this.Selected_Employee_SCPunishment.enddate).format('YYYY/MM/DD') );

  }
  this.loading = false; 
  console.log('complete');

  this.reason_id.setValue( this.Selected_Employee_SCCancelPunishment .reason_id);

  this.punishment_id.setValue(this.Selected_Employee_SCCancelPunishment .punishment_id);
  
  this.documenttype_id.setValue(this.Selected_Employee_SCCancelPunishment .documenttype_id);    
  this.documentdate.setValue(moment(this.Selected_Employee_SCCancelPunishment .documentdate));
  this.document_number.setValue(this.Selected_Employee_SCCancelPunishment .document_number);
  
  console.log('fdgsd fgsd');
  console.log(this.Selected_Employee_SCCancelPunishment .document_number);

  this.document_number.setValue(this.Selected_Employee_SCCancelPunishment .document_number);


  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCCancelPunishment  )
{
  console.log( this.reason_id);

  this.Selected_Employee_SCCancelPunishment .id = this.id;
  this.Selected_Employee_SCCancelPunishment .punishment_id = this.punishment_id.value;
  this.Selected_Employee_SCCancelPunishment .reason_id = this.reason_id.value;
   
  this.Selected_Employee_SCCancelPunishment .documenttype_id = this.documenttype_id.value;        
  this.Selected_Employee_SCCancelPunishment .document_number = this.document_number.value;
  this.Selected_Employee_SCCancelPunishment .documentdate = moment(this.documentdate.value).format('YYYY/MM/DD');
  this.Selected_Employee_SCCancelPunishment .serial_punishment = this.Selected_Employee_SCPunishment .serial;
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectPunishmentReasonChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectPunishmentReasonChange');
    if (event  && this.Selected_Employee_SCCancelPunishment )
    this.Selected_Employee_SCCancelPunishment.reason_id = event.option.value;  
  }

  public OnSelectPunishmentChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectPunishmentChange');
    if (event  && this.Selected_Employee_SCCancelPunishment )
    this.Selected_Employee_SCCancelPunishment.punishment_id = event.option.value;  
  }


  public OnSelectDocumentTypeChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCCancelPunishment )
    this.Selected_Employee_SCCancelPunishment.documenttype_id = event.option.value;  
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


  public displayPunishmentReasonProperty(value:string):string  {
    if (value && this.TBLShamelPunishmentReason_List){     
      let punishmentreason:any = this. TBLShamelPunishmentReason_List.find(crs => crs.punishmentreason_id.toString() == value) ;
      if (punishmentreason)
      return punishmentreason.punishmentreason_name;
    }
    return '';
  }


  public displayPunishmentProperty(value:string):string  {
    console.log('displayPunishmentProperty');
    console.log(value);

    if (value && this.TBLShamelPunishment_List ){

      let ShamelPunishment:any = this.TBLShamelPunishment_List.find(spec => spec.punishment_id.toString() == value) ;
      if (ShamelPunishment )
      return ShamelPunishment.punishment_name;
    }
    return '';
  }




 

  public ClearObject()
  {
    if (!this.Selected_Employee_SCCancelPunishment )
    this.Selected_Employee_SCCancelPunishment  = new ITBLShamelSCCancelPunishment();
    this.Selected_Employee_SCCancelPunishment.init();  
    this.Selected_Employee_SCCancelPunishment.id= this.id ; 
    this.Selected_Employee_SCCancelPunishment.serial_punishment= this.Selected_Employee_SCPunishment.serial; 
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

    if (this.Selected_Employee_SCCancelPunishment  &&
      this.Selected_Employee_SCCancelPunishment.serial<=0)
      {

      if (this.ValidateForm())
        this.SCCancelPunishmentService.add(this.Selected_Employee_SCCancelPunishment).toPromise().then(res => {
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
   else if (this.Selected_Employee_SCCancelPunishment  &&
    this.Selected_Employee_SCCancelPunishment.serial>0)
             {
               console.log('update');
               console.log(this.Selected_Employee_SCCancelPunishment);

      this.SCCancelPunishmentService.update(this.Selected_Employee_SCCancelPunishment).toPromise().then(res => {
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
      
    if (!this.reason_id.value || this.reason_id.value<=0)
    {
      console.log('error2');
      this.reason_id.setErrors({'Phone Number does not exist.': true});
      result = false;

    }

    
    if (!this.punishment_id.value || this.punishment_id.value<=0)
    {
      console.log('error2');
      this.punishment_id.setErrors({'Phone Number does not exist.': true});
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

  console.log('addEventDocumentDate');
  console.log(event.value);
  this.Selected_Employee_SCCancelPunishment.documentdate = moment(event.value).format('YYYY/MM/DD');
  console.log('addEventDocumentDate');

}







}
