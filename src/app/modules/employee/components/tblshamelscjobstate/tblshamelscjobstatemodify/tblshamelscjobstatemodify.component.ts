import { ITBLShamelChangeReason } from '../../../../shared/models/employees_department/ITBLShamelChangeReason';

import { ITBLShamelJobKind } from '../../../../shared/models/employees_department/ITBLShamelJobKind';
import { ITBLShamelJobName } from '../../../../shared/models/employees_department/ITBLShamelJobName';
import { ITBLShamelDepartment } from '../../../../shared/models/employees_department/ITBLShamelDepartment';
import { ITBLShamelIncMarsoom } from '../../../../shared/models/employees_department/ITBLShamelIncMarsoom';
import { AfterViewInit, Component, Inject, NgZone, OnInit } from '@angular/core';
import { ITBLShamelSCJobState } from '../../../../shared/models/employees_department/ITBLShamelSCJobState';
import { Observable } from 'rxjs';
import { ITBLShamelDocumentType } from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { ITBLShamelClass } from '../../../../shared/models/employees_department/ITBLShamelClass';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TblshamelincmarsoomService } from '../../../../shared/services/employees_department/tblshamelincmarsoom.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TblshameldepartmentService } from '../../../../shared/services/employees_department/tblshameldepartment.service';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TblshamelchangereasonService } from '../../../../shared/services/employees_department/tblshamelchangereason.service';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { TblshamelclassService } from 'src/app/modules/shared/services/employees_department/tblshamelclass.service';
import { TblshameljobkindService } from 'src/app/modules/shared/services/employees_department/tblshameljobkind.service';
import { TblshameljobnameService } from 'src/app/modules/shared/services/employees_department/tblshameljobname.service';
import { TblshamelscjobstateService } from 'src/app/modules/shared/services/employees_department/tblshamelscjobstate.service';

const moment = _moment;

@Component({
  selector: 'app-tblshamelscjobstatemodify',
  templateUrl: './tblshamelscjobstatemodify.component.html',
  styleUrls: ['./tblshamelscjobstatemodify.component.scss']
})
export class TblshamelscjobstatemodifyComponent implements OnInit,AfterViewInit  {

  //Link To Employee 
  id:number;
  Selected_Employee_JobState :ITBLShamelSCJobState;

  //Array Of AutoComplere With Filter
  Marsoom_List: ITBLShamelIncMarsoom[]=[];
  filteredMarsoomOptions: Observable<ITBLShamelIncMarsoom[]>;


  Department_List :ITBLShamelDepartment[]=[];
  filteredDepartmentOptions: Observable<ITBLShamelDepartment[]>;

  JobName_List :ITBLShamelJobName[]=[];
  filteredJobNameOptions: Observable<ITBLShamelJobName[]>;

  JobKind_List :ITBLShamelJobKind[]=[];
  filteredJobKindOptions: Observable<ITBLShamelJobKind[]>;


  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;  

  Class_List :ITBLShamelClass[]=[];
  filteredClassOptions: Observable<ITBLShamelClass[]>;  

  ChangeReason_List :ITBLShamelChangeReason[]=[];
  filteredChangeReasonOptions: Observable<ITBLShamelChangeReason[]>;  

  
  // Access To Element in Form
  Form: FormGroup ;
   incmarsoom_id :  FormControl;
    changedate :  FormControl ;
   doc_date :  FormControl ;
   begindate :  FormControl ;
   doc_number :  FormControl ;
   salary :  FormControl ;
   changereason_id :  FormControl ;
   documenttype_id :  FormControl ;
   department_id :  FormControl ;
   jobname_id :  FormControl ;
   jobkind_id :  FormControl ;
   class_id :  FormControl ;


  

  submitted = false;


  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelSCJobState,id:number},
    public jobstateService:TblshamelscjobstateService,
    public marsoomService:TblshamelincmarsoomService,
    public departmentService:TblshameldepartmentService,
    public jobNameService:TblshameljobnameService,
    public jobKindService:TblshameljobkindService,  
    public documentTypeService:TblshameldocumenttypeService ,
    public classService:TblshamelclassService ,
    public changereasonService:TblshamelchangereasonService ,
    private fb: FormBuilder,
    private ngZone: NgZone,
  ) {
    this.BuildForm();
    this.ngZone.run(() =>
    this.FillArrayUsingService
    );

    
    
    this.ClearForm();
    if (data && data.obj && data.id )
    { 
      this.id = data.id;     
      this.Selected_Employee_JobState = data.obj;
      
    }
    
    //this.ClearForm();
    this.SetValue();
    
   }
   //#endregion

   ngAfterViewInit() {
   
  }

   //#region  Init Component

   ngOnInit(): void {

   
            
    }

  

    public async FillArrayUsingService()
   {
     try{
      this.marsoomService.list().toPromise().then(
        (data:any)=>
        {      
          this.Marsoom_List=data;
          console.log(this.Marsoom_List);                      
        }
      );
      this.filteredMarsoomOptions = this. incmarsoom_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredMarsoom(value) : this.Marsoom_List.slice() )
      );    
     }catch(ex :any){
      console.log(ex);

    }

     try{
     this.departmentService.list().toPromise().then(
      (data:any)=>
      {      
        this.Department_List=data;       
        console.log(this.Department_List);                     
      }
    );
    this.filteredDepartmentOptions = this. department_id.valueChanges
    .pipe(
      startWith(''),    
      map(value => value   && typeof value === 'string'  ? this._filteredDepartment(value) : this.Department_List.slice() )
    );

    }catch(ex :any){
      console.log(ex);

    }


    try{
      this.changereasonService.list().toPromise().then(
       (data:any)=>
       {      
         this.ChangeReason_List=data;                         
         console.log(this.ChangeReason_List);                     
       }
     );
     this.filteredChangeReasonOptions = this. changereason_id.valueChanges
     .pipe(
       startWith(''),    
       map(value => value   && typeof value === 'string'  ? this._filteredChangeReason(value) : this.ChangeReason_List.slice() )
     );
 
     }catch(ex :any){
      console.log(ex);

    }


    try{
    this.classService.list().toPromise().then(
      (data:any)=>
      {      
        this.Class_List=data;  
        console.log(this.Class_List);            
      }
    );
    this.filteredClassOptions = this. class_id.valueChanges
    .pipe(
      startWith(''),     
      map(value => value   && typeof value === 'string'  ? this._filteredClass(value) : this.Class_List.slice())
    );

    }catch(ex :any){
      console.log(ex);

    }

    try{
    this.documentTypeService.list().toPromise().then(
      (data:any)=>
      {      
        this.DocumentType_List=data;  
        console.log(this.DocumentType_List);              
      }
    );
    this.filteredDocumentTypeOptions = this. documenttype_id.valueChanges
    .pipe(
      startWith(''),     
      map(value => value   && typeof value === 'string'  ? this._filteredDocumentType(value) : this.DocumentType_List.slice())
    );
    }catch(ex :any){
      console.log(ex);

    }

    try{
    this.jobKindService.list().toPromise().then(
      (data:any)=>
      {      
        this.JobKind_List=data;
        console.log(this.JobKind_List);             
      }
    );
    this.filteredJobKindOptions = this. jobkind_id.valueChanges
    .pipe(
      startWith(''),      
      map(value => value   && typeof value === 'string' ? this._filteredJobKind(value) : this.JobKind_List.slice())
    );
    }catch(ex :any){
      console.log(ex);

    }

    try{
      this.jobNameService.list().toPromise().then(
        (data:any)=>
        {      
          this.JobName_List=data;   
          console.log(this.JobName_List);                
        }
      );
      this.filteredJobNameOptions = this. jobname_id.valueChanges
      .pipe(
        startWith(''),      
        map(value => value   && typeof value === 'string' ? this._filteredJobName(value) : this.JobName_List.slice())
      );
      }catch(ex :any){
        console.log(ex);
 
      }

      this.ClearForm();
      this.SetValue();

   }
  
   public BuildForm()
   {
     try{    


      this. incmarsoom_id   = new FormControl({value: '', disabled: false},[Validators.required, Validators.minLength(5)]);
      this.  changedate = new FormControl( {value: ''} ,[ Validators.required ]);
      this. doc_date = new FormControl('' ,[ Validators.required ]);
      this. begindate = new FormControl({value: '', disabled: false},[Validators.required, Validators.minLength(5)]);
      this. doc_number= new FormControl('',[ Validators.required ]);
      this. salary = new FormControl('',[ Validators.required ]);
      this. changereason_id = new FormControl('',[ Validators.required ]);
      this. documenttype_id = new FormControl('',[ Validators.required ]);
      this. department_id = new FormControl('',[ Validators.required ]);
      this. jobname_id = new FormControl('',[ Validators.required ]);
      this. jobkind_id = new FormControl('',[ Validators.required ]);
      this. class_id= new FormControl('',[ Validators.required ]);

      /*

      this. incmarsoom_id   = new FormControl({value: '', disabled: false},[Validators.required, Validators.minLength(5)]);
      this.  changedate = new FormControl( moment(this.Selected_Employee_JobState. changedate,'YYYY/MM/DD')   ,[ Validators.required ]);
      this. doc_date = new FormControl( moment(this.Selected_Employee_JobState.doc_date,'YYYY/MM/DD') ,[ Validators.required ]);
      this. begindate = new FormControl({value: this.Selected_Employee_JobState.begindate, disabled: false},[Validators.required, Validators.minLength(5)]);
      this. doc_number= new FormControl(this.Selected_Employee_JobState.doc_number,[ Validators.required ]);
      this. salary = new FormControl(this.Selected_Employee_JobState.salary,[ Validators.required ]);
      this. changereason_id = new FormControl(this.Selected_Employee_JobState.changereason_id,[ Validators.required ]);
      this. documenttype_id = new FormControl(this.Selected_Employee_JobState.documenttype_id,[ Validators.required ]);
      this. department_id = new FormControl(this.Selected_Employee_JobState.department_id,[ Validators.required ]);
      this. jobname_id = new FormControl('',[ Validators.required ]);
      this. jobkind_id = new FormControl('',[ Validators.required ]);
      this. class_id= new FormControl('',[ Validators.required ]);

      */

      this.Form = this.fb.group({
        });
        this.Form .addControl('incmarsoom_id',this. incmarsoom_id);
        this.Form .addControl('changedate',this.  changedate);
        this.Form .addControl('begindate',this. begindate);
        this.Form .addControl('changereason_id',this.changereason_id);
        this.Form .addControl('class_id',this. class_id);
        this.Form .addControl('department_id',this. department_id);
        this.Form .addControl('doc_date',this. doc_date);    
        this.Form .addControl('doc_number',this. doc_number);    
        this.Form .addControl('documenttype_id',this. documenttype_id);    
        this.Form .addControl('jobkind_id',this. jobkind_id);    
        this.Form .addControl('jobname_id',this. jobname_id);    
        this.Form .addControl('salary',this. salary);    

      }catch(ex :any){
        console.log(ex);
 
      }
   }
   //#endregion


   //#region Filter Of  

   private _filteredMarsoom(value: string): ITBLShamelIncMarsoom[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Marsoom_List.filter(obj => obj.incmarsoomdata.includes(filterValue) );
    }
    return this.Marsoom_List.slice();
  }

  private _filteredChangeReason(value: string): ITBLShamelChangeReason[] {    
    if (value)
    {
    const filterValue = value ;
    return this.ChangeReason_List.filter(obj => obj.changereason_name.includes(filterValue) );
    }
    return this.ChangeReason_List.slice();
  }

  private _filteredDepartment(value: string): ITBLShamelDepartment[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Department_List.filter(obj => obj.department_name.includes(filterValue) );
    }
    return this.Department_List.slice();
  }

  private _filteredJobKind(value: string): ITBLShamelJobKind[] {    
    if (value)
    {
      const filterValue = value ;
      return this.JobKind_List.filter(obj => obj.jobkind_name.includes(filterValue) );

    }
    return this.JobKind_List.slice();
  }
  private _filteredJobName(value: string): ITBLShamelJobName[] {    
    if (value)
    {
      const filterValue = value ;
      return this.JobName_List.filter(obj => obj.jobname_name.includes(filterValue) );

    }
    return this.JobName_List.slice();
  }

  private _filteredDocumentType(value: string): ITBLShamelDocumentType[] {    
    if (value)
    {
    const filterValue = value ;
    return this.DocumentType_List.filter(obj => obj.documenttype_name.includes(filterValue) );
    }
    return this.DocumentType_List.slice();
  }

  private _filteredClass(value: string): ITBLShamelClass[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Class_List.filter(obj => obj.class_name.includes(filterValue) );
    }
    return this.Class_List.slice();
  }
  
  //#endregion


  //#region SetValue And GetValue Function
  public ClearForm()
  {
    try{


    this. salary.reset();
    this. jobname_id.reset();
    this. jobkind_id.reset();
    this. incmarsoom_id.reset();
    this. documenttype_id.reset();
    this. doc_number.reset();
    this. doc_date.reset();
    this. department_id.reset();
    this. class_id.reset();
    this. changereason_id.reset();
    this. begindate.reset();
    this.  changedate.reset();
    this.Form.reset();
  }catch(ex :any){
    console.log(ex);

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
if (this.Selected_Employee_JobState )
{
  console.log("iside setvlaue");

    this.  changedate.setValue(moment(this.Selected_Employee_JobState. changedate,'YYYY/MM/DD') );
    this. begindate.setValue(moment(this.Selected_Employee_JobState.begindate,'YYYY/MM/DD') );

   


    this. class_id.setValue(this.Selected_Employee_JobState.class_id);
    this. department_id.setValue(this.Selected_Employee_JobState.department_id);
    this. doc_date.setValue(moment(this.Selected_Employee_JobState.doc_date,'YYYY/MM/DD') );
    this. doc_number.setValue(this.Selected_Employee_JobState.doc_number);
    this. documenttype_id.setValue(this.Selected_Employee_JobState.documenttype_id);
    this. jobkind_id.setValue(this.Selected_Employee_JobState.jobkind_id);
    this. jobname_id.setValue(this.Selected_Employee_JobState.jobname_id);
    this. salary.setValue(this.Selected_Employee_JobState.salary);
    console.log("after set");
   
    
    this.Form.setValue(
      {
      incmarsoom_id : '',
      begindate: this.Selected_Employee_JobState.begindate ,
      changedate: this.Selected_Employee_JobState.changedate ,
      changereason_id: this.Selected_Employee_JobState.changereason_id ,
      class_id: this.Selected_Employee_JobState.class_id ,
      department_id: this.Selected_Employee_JobState.department_id ,
      doc_date: this.Selected_Employee_JobState.doc_date ,
      doc_number: this.Selected_Employee_JobState.doc_number ,
      documenttype_id: this.Selected_Employee_JobState.documenttype_id ,
      jobkind_id: this.Selected_Employee_JobState.jobkind_id ,      
      salary: this.Selected_Employee_JobState.salary ,      
      jobname_id: this.Selected_Employee_JobState.jobname_id ,      
    });
    
    
    

   
    //this.Form.patchValue();

  }
  }catch(ex :any){
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_JobState )
{

  this.Selected_Employee_JobState. changedate=moment(this.  changedate.value).format('YYYY/MM/DD') ;
  this.Selected_Employee_JobState.begindate = moment(this. begindate.value).format('YYYY/MM/DD') ;
  this.Selected_Employee_JobState.changereason_id = this. changereason_id.value;
  this.Selected_Employee_JobState.class_id = this. class_id.value;
  this.Selected_Employee_JobState.department_id = this. department_id.value;
  this.Selected_Employee_JobState.doc_date =moment(this. doc_date.value).format('YYYY/MM/DD') ;
  this.Selected_Employee_JobState.doc_number = this. doc_number.value;
  this.Selected_Employee_JobState.documenttype_id= this. documenttype_id.value;
  this.Selected_Employee_JobState.jobkind_id = this. jobkind_id.value;
  this.Selected_Employee_JobState.jobname_id = this. jobname_id.value;
  this.Selected_Employee_JobState.salary = this. salary.value;


  }
  }catch(ex :any){
    console.log(ex);

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectMarsoomChange(event: MatAutocompleteSelectedEvent) {
    


    if (event)
    {

      let indexMarsoom = event.option.value;
      if (indexMarsoom && indexMarsoom>0)
      {
         let MarsoomObject : ITBLShamelIncMarsoom | undefined=  this.Marsoom_List.find(obj => obj.incmarsoom_id == indexMarsoom);
         if (MarsoomObject)
         {
           console.log(MarsoomObject);
          this. changereason_id.setValue( MarsoomObject?.changereason_id);
          this.  changedate.setValue( MarsoomObject?. changedate);
          this. doc_date.setValue( MarsoomObject?.documentdate);
          this. begindate.setValue( MarsoomObject?.begindate);
          this. doc_number.setValue( MarsoomObject?.document_number);
          this. documenttype_id.setValue( MarsoomObject?.documenttype_id);
         }

      }
      
    }
      
   

  }

  public OnSelectClassChange(event: MatAutocompleteSelectedEvent) {
    if ( event  &&  this.Selected_Employee_JobState )
      this.Selected_Employee_JobState.class_id = event.option.value;  
  }

  public OnSelectJobKindChange(event: MatAutocompleteSelectedEvent) {
    if ( event  &&  this.Selected_Employee_JobState )
      this.Selected_Employee_JobState.jobkind_id = event.option.value;
  }

  public OnSelectJobNameChange(event: MatAutocompleteSelectedEvent) {
    if ( event  &&  this.Selected_Employee_JobState )
      this.Selected_Employee_JobState.jobname_id = event.option.value;
  }


  public OnSelectDepartmentChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_JobState )
      this.Selected_Employee_JobState.department_id = event.option.value;   
  }

  public OnSelectChangeReasonChange(event: MatAutocompleteSelectedEvent) {
  
    if ( event  &&  this.Selected_Employee_JobState )
      this.Selected_Employee_JobState.changereason_id = event.option.value;   
  }

  public OnSelectDocumentTypeChange(event: MatAutocompleteSelectedEvent) {  
    if ( event  &&  this.Selected_Employee_JobState )
      this.Selected_Employee_JobState.documenttype_id = event.option.value;   
  }

  //#endregion


  //#region  Display Display Member
  public displayDocumentTypeProperty(value:string):string  {
    if (value && this.JobKind_List){     
      let cer:any = this.DocumentType_List.find(cer => cer.documenttype_id.toString() == value) ;
      if (cer )
      return cer.documenttype_name;
    }
    return '';
  }


  public displayClassProperty(value:string):string  {
    if (value && this.Class_List ){
      let object:any = this.Class_List.find(obj => obj.class_id.toString() == value) ;
      if (object )
      return object.class_name;
    }
    return '';
  }

  public displayJobKindProperty(value:string):string  {
    if (value && this.JobKind_List ){
      let object:any = this.JobKind_List.find(obj => obj.jobkind_id.toString() == value) ;
      if (object )
      return object.jobkind_name;
    }
    return '';
  }

  public displayJobNameProperty(value:string):string  {
    if (value && this.JobName_List ){
      let object:any = this.JobName_List.find(obj => obj.jobname_id.toString() == value) ;
      if (object )
      return object.jobname_name;
    }
    return '';
  }

  public displayChangeReasonProperty(value:string):string  {
    if (value && this.ChangeReason_List ){
      let object:any = this.ChangeReason_List.find(obj => obj.changereason_id.toString() == value) ;
      if (object )
      return object.changereason_name;
    }
    return '';
  }


  public displayMarsoomProperty(value:string):string  {
    if (value && this.Marsoom_List ){
      let object:any = this.Marsoom_List.find(obj => obj.incmarsoom_id.toString() == value) ;
      if (object )
      {
        return object.incmarsoomdata;
      }
      
    }
    return '';
  }


  public displayDeparmentProperty(value:string):string  {
    if (value && this.Department_List ){
      let object:any = this.Department_List.find(obj => obj.department_id.toString() == value) ;
      if (object )
      return object.department_name;
    }
    return '';
  }
  
  //#endregion

  public ClearObject()
  {
    try{
      if (!this.Selected_Employee_JobState)
      this.Selected_Employee_JobState = new ITBLShamelSCJobState();
      this.Selected_Employee_JobState.init();  
      this.Selected_Employee_JobState.id= this.id ; 

    }catch(ex:any)
    {}


  }

  public async Save()
  {
 
    this.submitted = true;
    this.getValue();

   console.log(this.Selected_Employee_JobState);
    
    if (this.Form.invalid) {
      console.log("this.Form.invalid"+this.Form.invalid);
      console.log("this.Form.invalid"+this.Form.errors);
      return;
    }

    if (this.Selected_Employee_JobState  &&
      this.Selected_Employee_JobState.serial<=0)
      if (this.ValidateForm())
      {
        this.jobstateService.add(this.Selected_Employee_JobState).toPromise().then(res => {
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

    
   
   else if (this.Selected_Employee_JobState  &&
             this.Selected_Employee_JobState.serial>0)
      this.jobstateService.update(this.Selected_Employee_JobState).toPromise().then(res => {
        console.log(res)
        if (res == 1)
        {
          this.getValue();

        }else
        {
        }
    });


  }


  public ValidateForm():boolean
  {
    let result : boolean = true;


    if (!this. department_id.value || this. department_id.value <=0)
    {
      console.log('error1');
      this. department_id.setErrors({ invalid: true ,required:true});
      result = false;      
    }
    if (!this. jobkind_id.value || this. jobkind_id.value <=0)
    {
      console.log('error1');
      this. jobkind_id.setErrors({ invalid: true ,required:true});
      result = false;      
    }
    if (!this. jobname_id.value || this. jobname_id.value <=0)
    {
      console.log('error1');
      this. jobname_id.setErrors({ invalid: true ,required:true});
      result = false;      
    }
    if (!this. class_id.value || this. class_id.value <=0)
    {
      console.log('error1');
      this. class_id.setErrors({ invalid: true ,required:true});
      result = false;      
    }
    if (!this. documenttype_id.value || this. documenttype_id.value <=0)
    {
      console.log('error1');
      this. documenttype_id.setErrors({ invalid: true ,required:true});
      result = false;      
    }
    if (!this. changereason_id.value || this. changereason_id.value <=0)
    {
      console.log('error1');
      this. changereason_id.setErrors({ invalid: true ,required:true});
      result = false;      
    }
    if (!this. salary.value || this. salary.value <=0)
    {
      console.log('error1');
      this. salary.setErrors({ invalid: true ,required:true});
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


addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  let  changedate: Moment = this.  changedate.value;
  this.Selected_Employee_JobState. changedate = moment(event.value).toString();
}


setDefaultDate() {
  this.Form.patchValue({
//     startdate: moment("12/25/1995", "MM/DD/YYYY")
  });
}
}
