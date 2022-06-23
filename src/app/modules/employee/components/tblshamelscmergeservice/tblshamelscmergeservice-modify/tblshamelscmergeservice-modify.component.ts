import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable, startWith, map } from 'rxjs';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { ITBLShamelDocumentType } from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { TBLShamelMergeServiceReason } from '../../../../shared/models/employees_department/TBLShamelMergeServiceReason';
import { TBLShamelSCMergeService } from '../../../../shared/models/employees_department/TBLShamelSCMergeService';
import { TBLShamelSCMergeServiceService } from '../../../../shared/services/employees_department/tblshamel-sc-merge-service.service';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';
import { TBLShamelMergeServiceReasonService } from '../../../../shared/services/employees_department/tblshamel-merge-service-reason.service';
@Component({
  selector: 'app-tblshamelscmergeservice-modify',
  templateUrl: './tblshamelscmergeservice-modify.component.html',
  styleUrls: ['./tblshamelscmergeservice-modify.component.scss']
})

export class TblshamelscmergeserviceModifyComponent implements OnInit {

  id:number;
  Selected_Employee_SCMergeService :TBLShamelSCMergeService;

  //Array Of AutoComplere With Filter
  
  List_TBLShamelMergeServiceReason :TBLShamelMergeServiceReason[]=[];
  filter_TBLShamelMergeServiceReason: Observable<TBLShamelMergeServiceReason[]>;  

  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;


  
  // Access To Element in Form
  Form: FormGroup ;
  fcl_years   = new FormControl();
  fcl_months = new FormControl();
  fcl_days  = new FormControl();
  fcl_mergeservicereason_id  = new FormControl();  
  fcl_documenttype_id = new FormControl();
  fcl_document_number = new FormControl();
  fcl_documentdate = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: {obj: TBLShamelSCMergeService,id:number},
    public ShamelSCMergeService:TBLShamelSCMergeServiceService,
    public ShamelMergeServiceReasonService:TBLShamelMergeServiceReasonService,    
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {
    this.loading = true;

    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_SCMergeService = data.obj;
    }
    console.log(IGlobalEmployeeList.TBLShamelBonusList  );

    if (this.ShameldocumenttypeService.List_TBLShamelDocumentType &&
        this.ShameldocumenttypeService.List_TBLShamelDocumentType.length >0 )
        this.DocumentType_List = this.ShameldocumenttypeService.List_TBLShamelDocumentType;
    else
    {
      this.ShameldocumenttypeService.list().subscribe
      (
        data=>
        {
          this.DocumentType_List = data;
          this.ShameldocumenttypeService.List_TBLShamelDocumentType= data;
        }
      )

    }    


    if (this.ShamelMergeServiceReasonService.List_TBLShamelMergeServiceReason &&
      this.ShamelMergeServiceReasonService.List_TBLShamelMergeServiceReason.length >0 )
      this.List_TBLShamelMergeServiceReason = this.ShamelMergeServiceReasonService.List_TBLShamelMergeServiceReason;
  else
  {
    this.ShamelMergeServiceReasonService.list().subscribe
    (
      data=>
      {
        this.List_TBLShamelMergeServiceReason = data;
        this.ShamelMergeServiceReasonService.List_TBLShamelMergeServiceReason = data;
      }
    )

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

  }

  
  
   public BuildForm()
   {
    

      this.Form = new FormGroup({});
      this.fcl_days   = new FormControl();
      this.fcl_months  = new FormControl();
      this.fcl_years = new FormControl();
      this.fcl_document_number = new FormControl();
      this.fcl_mergeservicereason_id  = new FormControl();
      this.fcl_document_number  = new FormControl();
      this.fcl_documentdate   = new FormControl();      
      this.Form.addControl('days',this.fcl_days);
      this.Form.addControl('months',this.fcl_months);
      this.Form.addControl('years',this.fcl_years);
      this.Form.addControl('mergeservicereason_id',this.fcl_mergeservicereason_id);
      this.Form.addControl('documenttype_id',this.fcl_documenttype_id);
      this.Form.addControl('document_number',this.fcl_document_number);
      this.Form.addControl('documentdate',this.fcl_documentdate);

    if (this.Selected_Employee_SCMergeService && this.Selected_Employee_SCMergeService.serial &&
      this.Selected_Employee_SCMergeService.serial>0)
    {

    
      this.fcl_days.setValue(this.Selected_Employee_SCMergeService.days); 
      this.fcl_months.setValue(this.Selected_Employee_SCMergeService.months); 
      this.fcl_years.setValue(this.Selected_Employee_SCMergeService.years); 
      this.fcl_mergeservicereason_id.setValue(this.Selected_Employee_SCMergeService.mergeservicereason_id); 
      this.fcl_documenttype_id.setValue(this.Selected_Employee_SCMergeService.documenttype_id); 
      this.fcl_document_number.setValue(this.Selected_Employee_SCMergeService.document_number); 
      this.fcl_documentdate.setValue(this.Selected_Employee_SCMergeService.documentdate); 

      
    
    }

     
   
  }
   //#endregion


   //#region Filter Of  

    public  _Filtered_TBLShamelMergeServiceReason(value: string): TBLShamelMergeServiceReason[] 
     {    
    if (value)
    {
    const filterValue = value ;
    return this.List_TBLShamelMergeServiceReason.filter(obj => obj.mergeservicereason_name && obj.mergeservicereason_name.includes(filterValue) );
    }
    return this.List_TBLShamelMergeServiceReason.slice();
  }

  public  _Filtered_DocumentType(value: string): ITBLShamelDocumentType[] {    
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
      this.fcl_days.reset();
      this.fcl_months.reset();
      this.fcl_years.reset();
      this.fcl_mergeservicereason_id.reset();
      this.fcl_document_number.reset();
      this.fcl_document_number.reset();
      this.fcl_documenttype_id.reset();    

  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    if (this.Selected_Employee_SCMergeService && this.Selected_Employee_SCMergeService.serial &&
      this.Selected_Employee_SCMergeService.serial>0)
    {

    
      this.fcl_days.setValue(this.Selected_Employee_SCMergeService.days); 
      this.fcl_months.setValue(this.Selected_Employee_SCMergeService.months); 
      this.fcl_years.setValue(this.Selected_Employee_SCMergeService.years); 
      this.fcl_mergeservicereason_id.setValue(this.Selected_Employee_SCMergeService.mergeservicereason_id); 
      this.fcl_documenttype_id.setValue(this.Selected_Employee_SCMergeService.documenttype_id); 
      this.fcl_document_number.setValue(this.Selected_Employee_SCMergeService.document_number); 
      this.fcl_documentdate.setValue(this.Selected_Employee_SCMergeService.documentdate); 

      
    
    }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCMergeService )
{

  this.Selected_Employee_SCMergeService.id = this.id;
  this.Selected_Employee_SCMergeService.days = this.fcl_days.value;
  this.Selected_Employee_SCMergeService.months = this.fcl_months.value;
    this.Selected_Employee_SCMergeService.years =this.fcl_years.value; 
    this.Selected_Employee_SCMergeService.mergeservicereason_id = this.fcl_mergeservicereason_id.value; 
    this.Selected_Employee_SCMergeService.documenttype_id = this.fcl_documenttype_id.value;        
    this.Selected_Employee_SCMergeService.document_number = this.fcl_document_number.value;
    this.Selected_Employee_SCMergeService.documentdate = moment(this.fcl_documentdate.value).toDate();
    
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelect_TBLShamelMergeServiceReason(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_SCMergeService )
      this.Selected_Employee_SCMergeService.mergeservicereason_id = event.option.value;  
  }


  public OnSelect_DocumentType(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCMergeService )
      this.Selected_Employee_SCMergeService.documenttype_id = event.option.value;  
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


  public display_TBLShamelMergeServiceReason(value:string):string  {
    if (value && this.List_TBLShamelMergeServiceReason ){

      let obj:TBLShamelMergeServiceReason | undefined = this.List_TBLShamelMergeServiceReason.find(spec => spec.mergeservicereason_name && spec.mergeservicereason_name.toString() == value) ;
      if (obj &&  obj.mergeservicereason_name)
        return obj.mergeservicereason_name;
    }
    return '';
  }





 

  

  public async Save()
  {
 
    this.submitted = true;

   
    console.log("this.Form.invalid"+this.Form.errors);

    
    if (!this.Form.valid ) {
      return;
    }

    this.getValue();

    if (this.Selected_Employee_SCMergeService  &&
      (!this.Selected_Employee_SCMergeService.serial ||
      this.Selected_Employee_SCMergeService.serial<=0))
      {


        this.ShamelSCMergeService.add(this.Selected_Employee_SCMergeService).toPromise().then(res => {
          console.log(res)
          if (res == 1)
        {
          this.ClearForm();

        }else
        {



        }
    });
  }
   else if (this.Selected_Employee_SCMergeService  &&
    this.Selected_Employee_SCMergeService.serial &&
             this.Selected_Employee_SCMergeService.serial>0)
             {

      this.ShamelSCMergeService.update(this.Selected_Employee_SCMergeService).toPromise().then(res => {
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


  

  public onReset(): void {
    this.submitted = false;
    this.Form.reset();
  }

/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.Form.controls[control].hasError(error);
}









}
