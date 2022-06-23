import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { ITBLShamelDocumentType } from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { TBLShamelMergeServiceReason } from '../../../../shared/models/employees_department/TBLShamelMergeServiceReason';
import { TBLShamelSCLegalHoliday } from '../../../../shared/models/employees_department/TBLShamelSCLegalHoliday';
import { TBLShamelSCMergeService } from '../../../../shared/models/employees_department/TBLShamelSCMergeService';
import { TBLShamelSCLEgalHolidayService } from '../../../../shared/services/employees_department/tblshamel-sc-legal-holiday.service';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';

@Component({
  selector: 'app-tblshamel-sc-legal-holiday-add',
  templateUrl: './tblshamel-sc-legal-holiday-add.component.html',
  styleUrls: ['./tblshamel-sc-legal-holiday-add.component.scss']
})
export class TBLShamelSCLEgalHolidayAddComponent implements OnInit {

  id:number;
  Selected_Employee_SCLegalHoliday :TBLShamelSCLegalHoliday;

  //Array Of AutoComplere With Filter
  
  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;

  // Access To Element in Form
  Form: FormGroup ;
  fcl_duration   = new FormControl();
  fcl_startdate  = new FormControl();
  fcl_enddate  = new FormControl();
  fcl_documenttype_id   = new FormControl();  
  fcl_document_number  = new FormControl();
  fcl_documentdate = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: {obj: TBLShamelSCMergeService,id:number},
    public ShamelSCLEgalHolidayService:TBLShamelSCLEgalHolidayService,
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {
    this.loading = true;

    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_SCLegalHoliday = data.obj;
    }
    

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
      this.fcl_duration   = new FormControl();
      this.fcl_startdate  = new FormControl();
      this.fcl_enddate = new FormControl();
      this.fcl_document_number = new FormControl();
      this.fcl_documenttype_id  = new FormControl();
      this.fcl_document_number  = new FormControl();
      this.fcl_documentdate   = new FormControl();      
      this.Form.addControl('duration',this.fcl_duration);
      this.Form.addControl('startdate',this.fcl_startdate);
      this.Form.addControl('enddate',this.fcl_enddate);
      this.Form.addControl('document_number',this.fcl_document_number);
      this.Form.addControl('documenttype_id',this.fcl_documenttype_id);
      this.Form.addControl('document_number',this.fcl_document_number);
      this.Form.addControl('documentdate',this.fcl_documentdate);

    if (this.Selected_Employee_SCLegalHoliday && this.Selected_Employee_SCLegalHoliday.serial &&
      this.Selected_Employee_SCLegalHoliday.serial>0)
    {
      this.fcl_duration.setValue(this.Selected_Employee_SCLegalHoliday.duration);           
      this.fcl_startdate.setValue(this.Selected_Employee_SCLegalHoliday.startdate); 
      this.fcl_enddate.setValue(this.Selected_Employee_SCLegalHoliday.enddate); 
      this.fcl_documenttype_id.setValue(this.Selected_Employee_SCLegalHoliday.documenttype_id); 
      this.fcl_document_number.setValue(this.Selected_Employee_SCLegalHoliday.document_number); 
      this.fcl_documentdate.setValue(this.Selected_Employee_SCLegalHoliday.documentdate);         
    }

     
   
  }
   //#endregion


  

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
      this.fcl_document_number.reset();
      this.fcl_documentdate.reset();
      this.fcl_documenttype_id.reset();
      this.fcl_duration.reset();
      this.fcl_enddate.reset();
      this.fcl_startdate.reset();
  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    if (this.Selected_Employee_SCLegalHoliday && this.Selected_Employee_SCLegalHoliday.serial &&
      this.Selected_Employee_SCLegalHoliday.serial>0)
    {

    
      this.fcl_duration.setValue(this.Selected_Employee_SCLegalHoliday.duration); 
      this.fcl_startdate.setValue(this.Selected_Employee_SCLegalHoliday.startdate); 
      this.fcl_enddate.setValue(this.Selected_Employee_SCLegalHoliday.enddate); 
      this.fcl_documenttype_id.setValue(this.Selected_Employee_SCLegalHoliday.documenttype_id); 
      this.fcl_document_number.setValue(this.Selected_Employee_SCLegalHoliday.document_number); 
      this.fcl_documentdate.setValue(this.Selected_Employee_SCLegalHoliday.documentdate); 

      
    
    }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCLegalHoliday )
{

  this.Selected_Employee_SCLegalHoliday.id = this.id;
  this.Selected_Employee_SCLegalHoliday.duration = this.fcl_duration.value;
  this.Selected_Employee_SCLegalHoliday.enterdate =moment( this.fcl_startdate.value).toDate();
    this.Selected_Employee_SCLegalHoliday.startdate =moment(this.fcl_enddate.value).toDate();
    
    this.Selected_Employee_SCLegalHoliday.documenttype_id = this.fcl_documenttype_id.value;        
    this.Selected_Employee_SCLegalHoliday.document_number = this.fcl_document_number.value;
    this.Selected_Employee_SCLegalHoliday.documentdate = moment(this.fcl_documentdate.value).toDate();
    
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 




  public OnSelect_DocumentType(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCLegalHoliday )
      this.Selected_Employee_SCLegalHoliday.documenttype_id = event.option.value;  
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







 

  

  public async Save()
  {
 
    this.submitted = true;

   
    console.log("this.Form.invalid"+this.Form.errors);

    
    if (!this.Form.valid ) {
      return;
    }

    this.getValue();

    if (this.Selected_Employee_SCLegalHoliday  &&
      (!this.Selected_Employee_SCLegalHoliday.serial ||
      this.Selected_Employee_SCLegalHoliday.serial<=0))
      {


        this.ShamelSCLEgalHolidayService.add(this.Selected_Employee_SCLegalHoliday).toPromise().then(res => {
          console.log(res)
          if (res == 1)
        {
          this.ClearForm();

        }else
        {



        }
    });
  }
   else if (this.Selected_Employee_SCLegalHoliday  &&
    this.Selected_Employee_SCLegalHoliday.serial &&
             this.Selected_Employee_SCLegalHoliday.serial>0)
             {

      this.ShamelSCLEgalHolidayService.update(this.Selected_Employee_SCLegalHoliday).toPromise().then(res => {
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
