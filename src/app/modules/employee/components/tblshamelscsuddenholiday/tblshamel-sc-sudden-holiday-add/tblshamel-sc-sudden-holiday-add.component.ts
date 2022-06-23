import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ITBLShamelDocumentType } from '../../../../shared/models/employees_department/ITBLShamelDocumentType';
import { TBLShamelSCMergeService } from '../../../../shared/models/employees_department/TBLShamelSCMergeService';
import { TBLShamelSCSuddenHoliday } from '../../../../shared/models/employees_department/TBLShamelSCSuddenHoliday';
import { TBLShamelSuddenHoliday } from '../../../../shared/models/employees_department/TBLShamelSuddenHoliday';
import { TBLShamelSCLEgalHolidayService } from '../../../../shared/services/employees_department/tblshamel-sc-legal-holiday.service';
import { TBLShamelSCSuddenHolidayService } from '../../../../shared/services/employees_department/tblshamel-sc-sudden-holiday.service';
import { TBLShamelSuddenHolidayService } from '../../../../shared/services/employees_department/tblshamel-sudden-holiday.service';
import { TblshameldocumenttypeService } from '../../../../shared/services/employees_department/tblshameldocumenttype.service';

@Component({
  selector: 'app-tblshamel-sc-sudden-holiday-add',
  templateUrl: './tblshamel-sc-sudden-holiday-add.component.html',
  styleUrls: ['./tblshamel-sc-sudden-holiday-add.component.scss']
})
export class TBLShamelSCSuddenHolidayAddComponent implements OnInit {

  id:number;
  Selected_Employee_SCSuddenHoliday :TBLShamelSCSuddenHoliday;

  //Array Of AutoComplere With Filter
  
  DocumentType_List :ITBLShamelDocumentType[]=[];
  filteredDocumentTypeOptions: Observable<ITBLShamelDocumentType[]>;


  
  List_TBLShamelSuddenHoliday :TBLShamelSuddenHoliday[]=[];
  Filtered_TBLShamelSuddenHoliday: Observable<TBLShamelSuddenHoliday[]>;


  // Access To Element in Form
  Form: FormGroup ;
  fcl_duration   = new FormControl();
  fcl_startdate  = new FormControl();
  fcl_enddate  = new FormControl();
  fcl_suddenholiday_id= new FormControl();
  fcl_notes= new FormControl();
  fcl_documenttype_id   = new FormControl();  
  fcl_document_number  = new FormControl();
  fcl_documentdate = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: {obj: TBLShamelSCSuddenHoliday,id:number},
    public ShamelSCSuddenHolidayService:TBLShamelSCSuddenHolidayService,
    public ShamelSuddenHolidayService:TBLShamelSuddenHolidayService,
    public ShameldocumenttypeService:TblshameldocumenttypeService ,
    private fb: FormBuilder
  ) {
    this.loading = true;

    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_SCSuddenHoliday = data.obj;
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
      
    

    if (this.ShamelSuddenHolidayService.List_TBLShamelSuddenHolidayService &&
      this.ShamelSuddenHolidayService.List_TBLShamelSuddenHolidayService.length >0 )
      this.List_TBLShamelSuddenHoliday = this.ShamelSuddenHolidayService.List_TBLShamelSuddenHolidayService;
  else
  {
    this.ShamelSuddenHolidayService.list().subscribe
    (
      data=>
      {
        this.List_TBLShamelSuddenHoliday = data;
        this.ShamelSuddenHolidayService.List_TBLShamelSuddenHolidayService= data;
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

      this.fcl_notes = new FormControl();
      this.fcl_suddenholiday_id = new FormControl();

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

      this.Form.addControl('notes',this.fcl_notes);
      this.Form.addControl('suddenholiday_id',this.fcl_suddenholiday_id);

    if (this.Selected_Employee_SCSuddenHoliday && this.Selected_Employee_SCSuddenHoliday.serial &&
      this.Selected_Employee_SCSuddenHoliday.serial>0)
    {
      this.fcl_duration.setValue(this.Selected_Employee_SCSuddenHoliday.duration);           
      this.fcl_startdate.setValue(this.Selected_Employee_SCSuddenHoliday.startdate); 
      this.fcl_enddate.setValue(this.Selected_Employee_SCSuddenHoliday.enddate); 
      this.fcl_documenttype_id.setValue(this.Selected_Employee_SCSuddenHoliday.documenttype_id); 
      this.fcl_document_number.setValue(this.Selected_Employee_SCSuddenHoliday.document_number); 
      this.fcl_documentdate.setValue(this.Selected_Employee_SCSuddenHoliday.documentdate); 
      
      this.fcl_notes.setValue(this.Selected_Employee_SCSuddenHoliday.notes); 
      this.fcl_suddenholiday_id.setValue(this.Selected_Employee_SCSuddenHoliday.suddenholiday_id); 

      
    }

     
   
  }
   //#endregion

   public  _Filtered_TBLShamelSuddenHoliday(value: string): TBLShamelSuddenHoliday[] {    
    if (value)
    {
      const filterValue = value ;
      return this.List_TBLShamelSuddenHoliday.filter(obj =>obj.suddenholiday_name && obj.suddenholiday_name.includes(filterValue) );

    }
    return this.List_TBLShamelSuddenHoliday.slice();
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
      this.fcl_document_number.reset();
      this.fcl_documentdate.reset();
      this.fcl_documenttype_id.reset();
      this.fcl_duration.reset();
      this.fcl_enddate.reset();
      this.fcl_startdate.reset();
      this.fcl_suddenholiday_id.reset();
      this.fcl_notes.reset();
  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    if (this.Selected_Employee_SCSuddenHoliday && this.Selected_Employee_SCSuddenHoliday.serial &&
      this.Selected_Employee_SCSuddenHoliday.serial>0)
    {

    
      this.fcl_duration.setValue(this.Selected_Employee_SCSuddenHoliday.duration); 
      this.fcl_startdate.setValue(this.Selected_Employee_SCSuddenHoliday.startdate); 
      this.fcl_enddate.setValue(this.Selected_Employee_SCSuddenHoliday.enddate); 
      this.fcl_documenttype_id.setValue(this.Selected_Employee_SCSuddenHoliday.documenttype_id); 
      this.fcl_document_number.setValue(this.Selected_Employee_SCSuddenHoliday.document_number); 
      this.fcl_documentdate.setValue(this.Selected_Employee_SCSuddenHoliday.documentdate); 


      this.fcl_suddenholiday_id.setValue(this.Selected_Employee_SCSuddenHoliday.suddenholiday_id)
      this.fcl_notes.setValue(this.Selected_Employee_SCSuddenHoliday.notes);
      
    
    }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_SCSuddenHoliday )
{

  this.Selected_Employee_SCSuddenHoliday.id = this.id;
  this.Selected_Employee_SCSuddenHoliday.duration = this.fcl_duration.value;
  this.Selected_Employee_SCSuddenHoliday.enterdate =moment( this.fcl_startdate.value).toDate();
    this.Selected_Employee_SCSuddenHoliday.startdate =moment(this.fcl_enddate.value).toDate();
    
    this.Selected_Employee_SCSuddenHoliday.documenttype_id = this.fcl_documenttype_id.value;        
    this.Selected_Employee_SCSuddenHoliday.document_number = this.fcl_document_number.value;
    this.Selected_Employee_SCSuddenHoliday.documentdate = moment(this.fcl_documentdate.value).toDate();    
    this.Selected_Employee_SCSuddenHoliday.notes = this.fcl_notes.value    
    this.Selected_Employee_SCSuddenHoliday.suddenholiday_id = this.fcl_suddenholiday_id.value
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 




  public OnSelect_DocumentType(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCSuddenHoliday )
      this.Selected_Employee_SCSuddenHoliday.documenttype_id = event.option.value;  
  }


  public OnSelect_SuddenHoliday(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_SCSuddenHoliday )
      this.Selected_Employee_SCSuddenHoliday.suddenholiday_id = event.option.value;  
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


    //#region  Display Display Member
    public display_(value:string):string  {
      if (value && this.DocumentType_List){     
        let suddenholiday:any = this.List_TBLShamelSuddenHoliday.find(crs => crs.suddenholiday_name &&crs.suddenholiday_name.toString() == value) ;
        if (suddenholiday)
        return suddenholiday.suddenholiday_name;
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

    if (this.Selected_Employee_SCSuddenHoliday  &&
      (!this.Selected_Employee_SCSuddenHoliday.serial ||
      this.Selected_Employee_SCSuddenHoliday.serial<=0))
      {


        this.ShamelSCSuddenHolidayService.add(this.Selected_Employee_SCSuddenHoliday).toPromise().then(res => {
          console.log(res)
          if (res == 1)
        {
          this.ClearForm();

        }else
        {



        }
    });
  }
   else if (this.Selected_Employee_SCSuddenHoliday  &&
    this.Selected_Employee_SCSuddenHoliday.serial &&
             this.Selected_Employee_SCSuddenHoliday.serial>0)
             {

      this.ShamelSCSuddenHolidayService.update(this.Selected_Employee_SCSuddenHoliday).toPromise().then(res => {
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
