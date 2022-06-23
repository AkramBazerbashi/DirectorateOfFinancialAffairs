import { TblshamelincmarsoomService } from '../../../../shared/services/employees_department/tblshamelincmarsoom.service';
import { TblshamelchangereasonService } from '../../../../shared/services/employees_department/tblshamelchangereason.service';
import { ITBLShamelChangeReason } from '../../../../shared/models/employees_department/ITBLShamelChangeReason';
import { ITBLShamelIncMarsoom } from '../../../../shared/models/employees_department/ITBLShamelIncMarsoom';
import {ITBLShamelDocumentType} from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';



import * as moment from 'moment';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-tblshamelincmarsoommodify',
  templateUrl: './tblshamelincmarsoommodify.component.html',
  styleUrls: ['./tblshamelincmarsoommodify.component.scss']
})
export class TblshamelincmarsoommodifyComponent implements OnInit,AfterViewInit {

  Selected_IncMarsoom :ITBLShamelIncMarsoom;

  //Array Of AutoComplere With Filter
  ChangeReason_List :ITBLShamelChangeReason[]=[];
  filteredChangeReasonOptions: Observable<ITBLShamelChangeReason[]>;  

  
  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;


  
  // Access To Element in Form
  Form: FormGroup ;
  incmarsoomdata   = new FormControl();
  changedate = new FormControl();
  changereason_id = new FormControl();
  documenttype_id = new FormControl();
  document_number = new FormControl();
  documentdate = new FormControl();
  begindate = new FormControl();
  incpercentage = new FormControl();
  additionalvalue = new FormControl();
  


  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(
    public dialogRef: MatDialogRef<TblshamelincmarsoommodifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelIncMarsoom},
    public GlobalList:IGlobalEmployeeList,
    public incmarsoomService:TblshamelincmarsoomService,      
    public changereasonService:TblshamelchangereasonService,      
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {
    this.loading = true;
    if (data && data.obj )
    { 
      this.Selected_IncMarsoom = data.obj;
    }
   
console.log(IGlobalEmployeeList.TBLShamelChangeReasonList);
    if (IGlobalEmployeeList.TBLShamelChangeReasonList  && IGlobalEmployeeList.TBLShamelChangeReasonList.length>0)
    {
      this.ChangeReason_List = IGlobalEmployeeList.TBLShamelChangeReasonList;
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
    console.log('ngAfterViewInit');
    this.SetValue();
    
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
      if (!this.ChangeReason_List || this.ChangeReason_List.length<=0)
      {
        console.log("Call Service");
       this.changereasonService.list().subscribe(
         (data:any)=> {
           this.loading = false;
           this.ChangeReason_List=data;      
         });


     
      }
      
      this.filteredChangeReasonOptions = this.changereason_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredChangeReason(value) : this.ChangeReason_List.slice() )
      );  
    
    }catch(Exception : any)
    {}




   }
  
   public BuildForm()
   {
     try{  
      console.log('Build Form' );  
       console.log(this.Selected_IncMarsoom );  
    if (this.Selected_IncMarsoom && this.Selected_IncMarsoom.incmarsoom_id>0)
    {

     

    
      this.incmarsoomdata   = new FormControl({value: this.Selected_IncMarsoom.incmarsoomdata, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.changedate = new FormControl(this.Selected_IncMarsoom.changedate,[ Validators.required ]);

      this.changereason_id = new FormControl(this.Selected_IncMarsoom.changereason_id,[ Validators.required ]);
      this.begindate = new FormControl(this.Selected_IncMarsoom.begindate,[ Validators.required ]);
      this.incpercentage = new FormControl(this.Selected_IncMarsoom.incpercentage,[ Validators.required ]);
      this.additionalvalue = new FormControl(this.Selected_IncMarsoom.additionalvalue,[ Validators.required ]);


      this.documenttype_id = new FormControl({value: this.Selected_IncMarsoom.documenttype_id, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl(this.Selected_IncMarsoom.documentdate,[ Validators.required ]);      
      this.documentdate = new FormControl(moment(this.Selected_IncMarsoom.documentdate).format('YYYY/MM/DD') ,[ Validators.required ]);
    
    }else
    {
      this.incmarsoomdata   = new FormControl({value: '', disabled: false},[Validators.required, Validators.minLength(5)]);
      this.changedate = new FormControl('',[ Validators.required ]);

      this.changereason_id = new FormControl('',[ Validators.required ]);
      this.begindate = new FormControl('',[ Validators.required ]);
      this.incpercentage = new FormControl('',[ Validators.required ]);
      this.additionalvalue = new FormControl('',[ Validators.required ]);


      this.documenttype_id = new FormControl({value:'', disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl('',[ Validators.required ]);      
      this.documentdate = new FormControl('',[ Validators.required ]);
    
    
    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('changedate',this.changedate);        
        this.Form .addControl('changereason_id',this.changereason_id);
        this.Form .addControl('documenttype_id',this.documenttype_id);
        this.Form .addControl('documentdate',this.documentdate);        
        this.Form .addControl('document_number',this.document_number);
        this.Form .addControl('begindate',this.begindate);
        this.Form .addControl('incpercentage',this.incpercentage);
        this.Form .addControl('additionalvalue',this.additionalvalue);

  
      }catch(Exception:any){
        console.log(Exception);
      }
   }
   //#endregion


   //#region Filter Of  

   private _filteredChangeReason(value: string): ITBLShamelChangeReason[] {    
    if (value)
    {
    const filterValue = value ;
    return this.ChangeReason_List.filter(obj => obj.changereason_name.includes(filterValue) );
    }
    return this.ChangeReason_List.slice();
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
      this.changedate.reset();
      this.changereason_id.reset();
      this.documentdate.reset();
      this.document_number.reset();
      this.documenttype_id.reset();    
      this.begindate.reset();    

  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
      console.log(this.Selected_IncMarsoom);
//if (this.Selected_IncMarsoom )
{
  
this.Form.patchValue(
  {      
    begindate:moment(this.Selected_IncMarsoom.begindate),
    documentdate:moment(this.Selected_IncMarsoom.documentdate) ,
    changedate:moment(this.Selected_IncMarsoom.changedate) ,
    changereason_id:this.Selected_IncMarsoom.changereason_id,
    documenttype_id:this.Selected_IncMarsoom.documenttype_id,       
    document_number:this.Selected_IncMarsoom.document_number,
    additionalvalue:this.Selected_IncMarsoom.additionalvalue,
    incpercentage:this.Selected_IncMarsoom.incpercentage,
  }
);

console.log(this.Selected_IncMarsoom.changereason_id);
console.log(this.ChangeReason_List);



this.changereason_id.setValue(this.Selected_IncMarsoom.changereason_id);
this.documenttype_id.setValue(this.Selected_IncMarsoom.documenttype_id);    

this.documentdate.setValue(moment(this.Selected_IncMarsoom.documentdate));
this.changedate.setValue(moment(this.Selected_IncMarsoom.changedate));
this.begindate.setValue(moment(this.Selected_IncMarsoom.begindate));

this.document_number.setValue(this.Selected_IncMarsoom.document_number);
this.additionalvalue.setValue(this.Selected_IncMarsoom.additionalvalue);
this.incpercentage.setValue(this.Selected_IncMarsoom.incpercentage);


   

//    this.startdate.setValue(  moment(this.Selected_IncMarsoom.startdate).format('YYYY/MM/DD') );
//    this.enddate.setValue(moment(this.Selected_IncMarsoom.enddate).format('YYYY/MM/DD') );

  }
  this.loading = false; 
  console.log('complete');

  this.changereason_id.setValue(this.Selected_IncMarsoom.changereason_id);
  this.documenttype_id.setValue(this.Selected_IncMarsoom.documenttype_id);    
  
  this.documentdate.setValue(moment(this.Selected_IncMarsoom.documentdate));
  this.changedate.setValue(moment(this.Selected_IncMarsoom.changedate));
  this.begindate.setValue(moment(this.Selected_IncMarsoom.begindate));
  
  this.document_number.setValue(this.Selected_IncMarsoom.document_number);
  this.additionalvalue.setValue(this.Selected_IncMarsoom.additionalvalue);
  this.incpercentage.setValue(this.Selected_IncMarsoom.incpercentage);
  
  console.log(this.Selected_IncMarsoom.documenttype_id);
  

  console.log('Error');
  



  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_IncMarsoom )
{

    this.Selected_IncMarsoom.begindate =moment(this.begindate.value).format('YYYY/MM/DD'); 
    this.Selected_IncMarsoom.changereason_id = this.changereason_id.value;
    this.Selected_IncMarsoom.documenttype_id = this.documenttype_id.value;        
    this.Selected_IncMarsoom.document_number = this.document_number.value;
    this.Selected_IncMarsoom.documentdate = moment(this.documentdate.value).format('YYYY/MM/DD');
    this.Selected_IncMarsoom.incpercentage = this.incpercentage.value;
    this.Selected_IncMarsoom.additionalvalue = this.additionalvalue.value;
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectChangeReasonChange(event: MatAutocompleteSelectedEvent) {
  
    if ( event  &&  this.Selected_IncMarsoom )
      this.Selected_IncMarsoom.changereason_id = event.option.value;   
  }


  public OnSelectDocumentTypeChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_IncMarsoom )
      this.Selected_IncMarsoom.documenttype_id = event.option.value;  
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


  public displayChangeReasonProperty(value:string):string  {
    if (value && this.ChangeReason_List ){
      let object:any = this.ChangeReason_List.find(obj => obj.changereason_id.toString() == value) ;
      if (object )
      return object.changereason_name;
    }
    return '';
  }




  
 

  public ClearObject()
  {
    if (!this.Selected_IncMarsoom)
    this.Selected_IncMarsoom = new ITBLShamelIncMarsoom();
    this.Selected_IncMarsoom.init();  

  }

  public async Save()
  {
 
    this.submitted = true;

   console.log(this.Selected_IncMarsoom.incmarsoom_id);
    console.log("this.Form.invalid"+this.Form.errors);

    /*
    if (this.Form.invalid == true) {
      return;
    }
*/
    this.getValue();

    if (this.Selected_IncMarsoom  &&
      this.Selected_IncMarsoom.incmarsoom_id<=0)
      {

      if (this.ValidateForm())
        this.incmarsoomService.add(this.Selected_IncMarsoom).toPromise().then(res => {
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
   else if (this.Selected_IncMarsoom  &&
             this.Selected_IncMarsoom.incmarsoom_id>0)
             {
               console.log('update');
               console.log(this.Selected_IncMarsoom);

      this.incmarsoomService.update(this.Selected_IncMarsoom).toPromise().then(res => {
        console.log(res)
        if (res == 1)
        {
          this.dialogRef.close(1);

        }else
        {
        }
    });

  }
  }


  public ValidateForm():boolean
  {
    let result : boolean = true;



    if (!this.changereason_id.value || this.changereason_id.value <=0)
    {
      console.log('error1');
      this.changereason_id.setErrors({ invalid: true ,required:true});
      result = false;
      
    }
      
    if (!this.documenttype_id.value || this.documenttype_id.value<=0)
    {
      console.log('error2');
      this.documenttype_id.setErrors({'Phone Number does not exist.': true});
      result = false;

    }

    
    if (!this.document_number.value || this.document_number.value<=0)
    {
      console.log('error2');
      this.document_number.setErrors({'Phone Number does not exist.': true});
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

  this.Selected_IncMarsoom.documentdate = moment(event.value).format('YYYY/MM/DD');

}

addEventBeginDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_IncMarsoom.begindate = moment(event.value).format('YYYY/MM/DD');
}
addEventChangeDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_IncMarsoom.changedate = moment(event.value).format('YYYY/MM/DD');
}


}
