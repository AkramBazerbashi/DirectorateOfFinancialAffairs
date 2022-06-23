import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';
import { ITBLShamelBonus } from '../../../../shared/models/employees_department/ITBLShamelBonus';
import { ITBLShamelSCBonus } from '../../../../shared/models/employees_department/ITBLShamelSCBonus';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITBLShamelBonusReason } from '../../../../shared/models/employees_department/ITBLShamelBonusReason';
import { ITBLShamelDocumentType } from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TBLShamelBonusReasonService } from '../../../../shared/services/employees_department/tblshamel-bonus-reason.service';
import { TBLShamelBonusService } from '../../../../shared/services/employees_department/tblshamel-bonus.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TBLShamelSCBonusService } from '../../../../shared/services/employees_department/tblshamel-scbonus.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-tblshamelscbonusmodify',
  templateUrl: './tblshamelscbonusmodify.component.html',
  styleUrls: ['./tblshamelscbonusmodify.component.scss']
})
export class TblshamelscbonusmodifyComponent implements OnInit,AfterViewInit {

  //Link To Employee 
  id:number;
  Selected_Employee_SCBouns :ITBLShamelSCBonus;

  //Array Of AutoComplere With Filter
  Bonus_List :ITBLShamelBonus[]=[];
  filteredBonusOptions: Observable<ITBLShamelBonus[]>;  

  BonusReason_List :ITBLShamelBonusReason[]=[];
  filteredBonusReasonOptions: Observable<ITBLShamelBonusReason[]>;  

  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;


  
  // Access To Element in Form
  Form: FormGroup ;
  bonus_id   = new FormControl();
  reason_id = new FormControl();
  documenttype_id = new FormControl();
  document_number = new FormControl();
  documentdate = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelSCBonus,id:number},
    public GlobalList:IGlobalEmployeeList,
    public ShamelSCBonusService:TBLShamelSCBonusService,
    public ShamelBonusReasonService:TBLShamelBonusReasonService,
    public ShamelBonusService:TBLShamelBonusService,
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {
    this.loading = true;
    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_SCBouns = data.obj;
    }
    console.log(IGlobalEmployeeList.TBLShamelBonusList  );

    if (IGlobalEmployeeList.TBLShamelBonusList  && IGlobalEmployeeList.TBLShamelBonusList.length>0)
    {
      this.Bonus_List = IGlobalEmployeeList.TBLShamelBonusList;
    }
    if (IGlobalEmployeeList.TBLShamelDocumentTypeList  && IGlobalEmployeeList.TBLShamelDocumentTypeList.length>0)
    {
      this.DocumentType_List = IGlobalEmployeeList.TBLShamelDocumentTypeList;
    }
    if (IGlobalEmployeeList.TBLShamelBonusReasonList  && IGlobalEmployeeList.TBLShamelBonusReasonList.length>0)
    {
      this.BonusReason_List = IGlobalEmployeeList.TBLShamelBonusReasonList;
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
      if (!this.Bonus_List || this.Bonus_List.length<=0)
      {
       this.ShamelBonusService.list().subscribe(
         (data:any)=> {
           this.loading = false;
           this.Bonus_List=data;      
         });


     
      }
      
      this.filteredBonusOptions = this.bonus_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredBonus(value) : this.Bonus_List.slice() )
      );  
    
    }catch(Exception : any)
    {}


    try{
      if (!this.BonusReason_List || this.BonusReason_List.length<=0)
      {
       this.ShamelBonusReasonService.list().subscribe(
         (data:any)=> {
           this.loading = false;
           this.BonusReason_List=data;      
         });


     
      }
      
      this.filteredBonusReasonOptions = this.reason_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredBonusReason(value) : this.BonusReason_List.slice() )
      );  
    
    }catch(Exception : any)
    {}


   }
  
   public BuildForm()
   {
     try{  
      console.log('Build Form' );  
       console.log(this.Selected_Employee_SCBouns );  
    if (this.Selected_Employee_SCBouns && this.Selected_Employee_SCBouns.serial>0)
    {

    
      this.bonus_id   = new FormControl({value: this.Selected_Employee_SCBouns.bonus_id, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.reason_id = new FormControl(this.Selected_Employee_SCBouns.reason_id,[ Validators.required ]);
      this.documenttype_id = new FormControl({value: this.Selected_Employee_SCBouns.documenttype_id, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.document_number = new FormControl(this.Selected_Employee_SCBouns.documentdate,[ Validators.required ]);
      
      this.documentdate = new FormControl(moment(this.Selected_Employee_SCBouns.documentdate).format('YYYY/MM/DD') ,[ Validators.required ]);
    
    }else
    {
      this.bonus_id   = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.reason_id = new FormControl([ Validators.required ]);
      this.documenttype_id = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.documentdate = new FormControl([ Validators.required ]);
      this.document_number = new FormControl([ Validators.required ]);
    
    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('bonus_id',this.bonus_id);        
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

   private _filteredBonus(value: string): ITBLShamelBonus[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Bonus_List.filter(obj => obj.bonus_name.includes(filterValue) );
    }
    return this.Bonus_List.slice();
  }

  private _filteredBonusReason(value: string): ITBLShamelBonusReason[] {    
    if (value)
    {
    const filterValue = value ;
    return this.BonusReason_List.filter(obj => obj.bonusreason_name.includes(filterValue) );
    }
    return this.BonusReason_List.slice();
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
      this.bonus_id.reset();
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
      console.log(this.Selected_Employee_SCBouns);
//if (this.Selected_Employee_SCBouns )
{
  console.log('set value');
  console.log(this.BonusReason_List);
  
this.Form.patchValue(
  {
    


    
    bonus_id:this.Selected_Employee_SCBouns.bonus_id,
    reason_id:this.Selected_Employee_SCBouns.reason_id,
    documenttype_id:this.Selected_Employee_SCBouns.documenttype_id,   
    documentdate:moment(this.Selected_Employee_SCBouns.documentdate) ,
    document_number:this.Selected_Employee_SCBouns.document_number,
  }
);

this.bonus_id.setValue(this.Selected_Employee_SCBouns.bonus_id);
this.reason_id.setValue(this.Selected_Employee_SCBouns.reason_id);
this.documenttype_id.setValue(this.Selected_Employee_SCBouns.documenttype_id);    
this.documentdate.setValue(moment(this.Selected_Employee_SCBouns.documentdate));
this.document_number.setValue(this.Selected_Employee_SCBouns.document_number);

   

//    this.startdate.setValue(  moment(this.Selected_Employee_SCBouns.startdate).format('YYYY/MM/DD') );
//    this.enddate.setValue(moment(this.Selected_Employee_SCBouns.enddate).format('YYYY/MM/DD') );

  }
  this.loading = false; 
  console.log('complete');

  this.bonus_id.setValue(this.Selected_Employee_SCBouns.bonus_id);
  this.reason_id.setValue(this.Selected_Employee_SCBouns.reason_id);
  this.documenttype_id.setValue(this.Selected_Employee_SCBouns.documenttype_id);    
  this.documentdate.setValue(moment(this.Selected_Employee_SCBouns.documentdate).format('YYYY/MM/DD'));

  this.document_number.setValue(this.Selected_Employee_SCBouns.document_number);


  console.log(this.Form.controls['bonus_id'].value);
  console.log(moment(this.Selected_Employee_SCBouns.documentdate).format('YYYY/MM/DD'));

  console.log('fdgsd fgsd');
  console.log(this.Selected_Employee_SCBouns.document_number);

  this.document_number.setValue(this.Selected_Employee_SCBouns.document_number);


  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCBouns )
{
  console.log( this.bonus_id);
    this.Selected_Employee_SCBouns.bonus_id = this.bonus_id.value;
    this.Selected_Employee_SCBouns.reason_id = this.reason_id.value;
    this.Selected_Employee_SCBouns.documenttype_id = this.documenttype_id.value;        
    this.Selected_Employee_SCBouns.document_number = this.document_number.value;
    this.Selected_Employee_SCBouns.documentdate = moment(this.documentdate.value).format('YYYY/MM/DD');
    
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectBounsReasonChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_SCBouns )
      this.Selected_Employee_SCBouns.reason_id = event.option.value;  
  }

  public OnSelectBonusChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_SCBouns )
      this.Selected_Employee_SCBouns.bonus_id = event.option.value;  
  }

  public OnSelectDocumentTypeChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCBouns )
      this.Selected_Employee_SCBouns.documenttype_id = event.option.value;  
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


  public displayBonusReasonProperty(value:string):string  {
    if (value && this.BonusReason_List ){

      let BonusReason:any = this.BonusReason_List.find(spec => spec.bonusreason_id.toString() == value) ;
      if (BonusReason )
      return BonusReason.bonusreason_name;
    }
    return '';
  }



  public displayBonusProperty(value:string):string  {

    console.log('displayStateProperty');
    console.log(value);
    console.log(this.Bonus_List);
    console.log(IGlobalEmployeeList.TBLShamelBonusList);

    
    if (value && this.Bonus_List){
     
      let Bonus:any = this.Bonus_List.find(obj => obj.bonus_id.toString() == value) ;
      console.log( Bonus);

      if (Bonus )
      return Bonus.bonus_name;
    }
    return '';
  }  

 

  public ClearObject()
  {
    if (!this.Selected_Employee_SCBouns)
    this.Selected_Employee_SCBouns = new ITBLShamelSCBonus();
    this.Selected_Employee_SCBouns.init();  
    this.Selected_Employee_SCBouns.id= this.id ; 
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

    if (this.Selected_Employee_SCBouns  &&
      this.Selected_Employee_SCBouns.serial<=0)
      {

      if (this.ValidateForm())
        this.ShamelSCBonusService.add(this.Selected_Employee_SCBouns).toPromise().then(res => {
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
   else if (this.Selected_Employee_SCBouns  &&
             this.Selected_Employee_SCBouns.serial>0)
             {
               console.log('update');
               console.log(this.Selected_Employee_SCBouns);

      this.ShamelSCBonusService.update(this.Selected_Employee_SCBouns).toPromise().then(res => {
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



    if (!this.bonus_id.value || this.bonus_id.value <=0)
    {
      console.log('error1');
      this.bonus_id.setErrors({ invalid: true ,required:true});
      result = false;
      
    }
      
    if (!this.reason_id.value || this.reason_id.value<=0)
    {
      console.log('error2');
      this.reason_id.setErrors({'Phone Number does not exist.': true});
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

  this.Selected_Employee_SCBouns.documentdate = moment(event.value).format('YYYY/MM/DD');

}


}
