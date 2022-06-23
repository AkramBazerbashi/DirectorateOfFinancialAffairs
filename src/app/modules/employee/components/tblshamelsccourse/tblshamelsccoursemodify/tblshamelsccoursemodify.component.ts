import { TblshamelsccourseService } from '../../../../shared/services/employees_department/tblshamelsccourse.service';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITBLShamelCountry } from '../../../../shared/models/employees_department/ITBLShamelCountry';
import { ITBLShamelCourse } from '../../../../shared/models/employees_department/ITBLShamelCourse';
import { ITBLShamelSCCourse } from '../../../../shared/models/employees_department/ITBLShamelSCCourse';
import { ITBLShamelSpecification } from '../../../../shared/models/employees_department/ITBLShamelSpecification';
import { ITBLShamelState } from '../../../../shared/models/employees_department/ITBLShamelState';
import { TblshamelcountryService } from '../../../../shared/services/employees_department/tblshamelcountry.service';
import { TblshamelstateService } from '../../../../shared/services/employees_department/tblshamelstate.service';
import { TblshamelcourseService } from '../../../../shared/services/employees_department/tblshamelcourse.service';
import { TblshamelspecificationService } from '../../../../shared/services/employees_department/tblshamelspecification.service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;


@Component({
  selector: 'app-tblshamelsccoursemodify',
  templateUrl: './tblshamelsccoursemodify.component.html',
  styleUrls: ['./tblshamelsccoursemodify.component.scss']
})
export class TblshamelsccoursemodifyComponent implements OnInit,AfterViewInit {

  //Link To Employee 
  id:number;
  Selected_Employee_Course :ITBLShamelSCCourse;

  //Array Of AutoComplere With Filter
  Course_List :ITBLShamelCourse[]=[];
  filteredCourseOptions: Observable<ITBLShamelCourse[]>;  

  Specification_List :ITBLShamelSpecification[]=[];
  filteredSpecificationOptions: Observable<ITBLShamelSpecification[]>;  

  State_List :ITBLShamelState[]=[];
  filteredStateOptions: Observable<ITBLShamelState[]>;

  Country_List :ITBLShamelCountry[]=[];
  filteredCountryOptions: Observable<ITBLShamelCountry[]>;

  
  // Access To Element in Form
  Form: FormGroup ;
  course_id   = new FormControl();
  specification_id = new FormControl();
  country_id = new FormControl();
  city_id = new FormControl();
  startdate = new FormControl();
  enddate = new FormControl();
  studyduration = new FormControl();

  //Local Var

  submitted = false;
  loading: boolean = false;

  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelSCCourse,id:number},
    public sccourseService:TblshamelsccourseService,
    public courseService:TblshamelcourseService,
    public specificationService:TblshamelspecificationService ,
    public countryService:TblshamelcountryService,
    public stateService:TblshamelstateService,  
    private fb: FormBuilder
  ) {
    this.loading = true;
    this.FillArrayUsingService();
    this.BuildForm();

    if (data && data.obj && data.id > 0)
    { 
      this.id = data.id;     
      this.Selected_Employee_Course = data.obj;
    }
this.SetValue();
  

  
    

    
/*
    if (this.Selected_Employee_Course.serial <=0 ) 
    {
    
      console.log('ClearForm');

      this.ClearForm();
    }else 
    {
      this.SetValue();  
      this.loading = false; 
  
    }

  */    
    

  

  
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
      this.stateService.list().toPromise().then(
        (data:any)=>
        {      
          this.State_List=data;      
          this.city_id.setValue(this.Selected_Employee_Course.city_id);      
        }
      );
      this.filteredStateOptions = this.city_id.valueChanges
      .pipe(
        startWith(''),        
        map(value => value   && typeof value === 'string'  ? this._filteredState(value) : this.State_List.slice() )
      );  
     }catch(Exception : any)
     {}

     try{
     this.specificationService.list().toPromise().then(
      (data:any)=>
      {      
        this.Specification_List=data;                 
      }
    );
    this.filteredSpecificationOptions = this.specification_id.valueChanges
    .pipe(
      startWith(''),    
      map(value => value   && typeof value === 'string'  ? this._filteredSpecification(value) : this.Specification_List.slice() )
    );

    }catch(Exception : any)
    {}

    try{
    this.courseService.list().toPromise().then(
      (data:any)=>
      {      
        this.Course_List=data;          
      }
    );
    this.filteredCourseOptions = this.course_id.valueChanges
    .pipe(
      startWith(''),     
      map(value => value   && typeof value === 'string'  ? this._filteredCourse(value) : this.Course_List.slice())
    );

    }catch(Exception : any){}

    try{
    this.countryService.list().toPromise().then(
      (data:any)=>
      {      
        this.Country_List=data;          
      }
    );
    this.filteredCountryOptions = this.country_id.valueChanges
    .pipe(
      startWith(''),     
      map(value => value   && typeof value === 'string'  ? this._filteredCounty(value) : this.Country_List.slice())
    );
    }catch(Exception : any){}
   

   }
  
   public BuildForm()
   {
     try{    
    if (this.Selected_Employee_Course && this.Selected_Employee_Course.serial>0)
    {

    
      this.course_id   = new FormControl({value: this.Selected_Employee_Course.course_id, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.specification_id = new FormControl(this.Selected_Employee_Course.specification_id,[ Validators.required ]);
      this.country_id = new FormControl({value: this.Selected_Employee_Course.country_id, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.city_id = new FormControl(this.Selected_Employee_Course.city_id,[ Validators.required ]);
      
      this.startdate = new FormControl(moment(this.Selected_Employee_Course.startdate).format('YYYY/MM/DD') ,[ Validators.required ]);
      this.enddate = new FormControl(moment(this.Selected_Employee_Course.enddate).format('YYYY/MM/DD') ,[ Validators.required ]);
      
      this.studyduration = new FormControl(this.Selected_Employee_Course.studyduration,[ Validators.required ]);
      
    }else
    {
      this.course_id   = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.specification_id = new FormControl([ Validators.required ]);
      this.country_id = new FormControl({ disabled: false},[Validators.required, Validators.minLength(5)]);
      this.city_id = new FormControl([ Validators.required ]);
      this.startdate = new FormControl([ Validators.required ]);
      this.enddate = new FormControl([ Validators.required ]);
      this.studyduration = new FormControl([ Validators.required ]);
     
    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('course_id',this.course_id);        
        this.Form .addControl('specification_id',this.specification_id);
        this.Form .addControl('country_id',this.country_id);
        this.Form .addControl('city_id',this.city_id);        
        this.Form .addControl('startdate',this.startdate);
        this.Form .addControl('enddate',this.enddate);        
        this.Form .addControl('studyduration',this.studyduration);    
        console.log('Complenete');
      }catch(Exception:any){
        console.log(Exception);


      }
   }
   //#endregion


   //#region Filter Of  

   private _filteredSpecification(value: string): ITBLShamelSpecification[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Specification_List.filter(obj => obj.specification_name.includes(filterValue) );
    }
    return this.Specification_List.slice();
  }
  private _filteredCourse(value: string): ITBLShamelCourse[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Course_List.filter(obj => obj.course_name.includes(filterValue) );
    }
    return this.Course_List.slice();
  }
  private _filteredCounty(value: string): ITBLShamelCountry[] {    
    if (value)
    {
      const filterValue = value ;
      return this.Country_List.filter(obj => obj.country_name.includes(filterValue) );

    }
    return this.Country_List.slice();
  }
  private _filteredState(value: string): ITBLShamelState[] {    
    if (value)
    {
    const filterValue = value ;
    return this.State_List.filter(obj => obj.state_name.includes(filterValue) );
    }
    return this.State_List.slice();
  }
  //#endregion


  //#region SetValue And GetValue Function
  public ClearForm()
  {
    try{
      console.log('ClearForm');
      this.course_id.reset();
      this.specification_id.reset();
      this.studyduration.reset();
      this.country_id.reset();
      this.city_id.reset();    
      this.startdate.reset();
      this.enddate.reset();  
      this.studyduration.reset();
  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
      console.log(this.Selected_Employee_Course);
//if (this.Selected_Employee_Course )
{
  console.log('set value');
this.Form.patchValue(
  {
    city_id:this.Selected_Employee_Course.city_id,
    country_id:this.Selected_Employee_Course.country_id,
    course_id:this.Selected_Employee_Course.course_id,   
    specification_id:this.Selected_Employee_Course.specification_id,
    studyduration:this.Selected_Employee_Course.studyduration,
//    startdate:  moment(this.Selected_Employee_Course.startdate).format('YYYY/MM/DD') ,
//    enddate :moment(this.Selected_Employee_Course.enddate).format('YYYY/MM/DD') 
  }
);

    this.city_id.setValue(this.Selected_Employee_Course.city_id);
    this.country_id.setValue(this.Selected_Employee_Course.country_id);
    this.course_id.setValue(this.Selected_Employee_Course.course_id);    
    this.specification_id.setValue(this.Selected_Employee_Course.specification_id);
    this.studyduration.setValue(this.Selected_Employee_Course.studyduration);

   

//    this.startdate.setValue(  moment(this.Selected_Employee_Course.startdate).format('YYYY/MM/DD') );
//    this.enddate.setValue(moment(this.Selected_Employee_Course.enddate).format('YYYY/MM/DD') );

  }
  this.loading = false; 
  console.log('complete');
  this.studyduration.setValue(54);

  this.city_id.setValue(this.Selected_Employee_Course.city_id);
  this.country_id.setValue(this.Selected_Employee_Course.country_id);
  this.course_id.setValue(this.Selected_Employee_Course.course_id);    
  this.specification_id.setValue(this.Selected_Employee_Course.specification_id);
  this.studyduration.setValue(this.Selected_Employee_Course.studyduration);

  this.Form.controls['city_id'].setValue(this.Selected_Employee_Course.city_id);

  console.log(this.Form.controls['city_id'].value);

  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_Course )
{
  console.log( this.city_id.value);
    this.Selected_Employee_Course.city_id = this.city_id.value;
    this.Selected_Employee_Course.country_id = this.country_id.value;
    this.Selected_Employee_Course.course_id = this.course_id.value;        
    this.Selected_Employee_Course.specification_id = this.specification_id.value;
    this.Selected_Employee_Course.studyduration =this.studyduration.value;
    this.Selected_Employee_Course.startdate =this.startdate.value;
    this.Selected_Employee_Course.enddate =this.enddate.value;
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectCountryChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_Course )
      this.Selected_Employee_Course.country_id = event.option.value;  
  }

  public OnSelectCourseChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_Course )
      this.Selected_Employee_Course.course_id = event.option.value;  
  }

  public OnSelectStateChange(event: MatAutocompleteSelectedEvent) {
    console.log('OnSelectStateChange');
    console.log(event.option.value);
    if ( event  &&  this.Selected_Employee_Course )
      this.Selected_Employee_Course.city_id = event.option.value;  
  }

  public OnSelectSpecificationChange(event: MatAutocompleteSelectedEvent) {  
    if ( event  &&  this.Selected_Employee_Course )
      this.Selected_Employee_Course.specification_id = event.option.value;   
  }

  //#endregion


  //#region  Display Display Member
  public displayCourseProperty(value:string):string  {
    if (value && this.Course_List){     
      let course:any = this.Course_List.find(crs => crs.course_id.toString() == value) ;
      if (course )
      return course.course_name;
    }
    return '';
  }


  public displaySpecificationProperty(value:string):string  {
    if (value && this.Specification_List ){

      let Specification:any = this.Specification_List.find(spec => spec.specification_id.toString() == value) ;
      if (Specification )
      return Specification.specification_name;
    }
    return '';
  }

  public displayStateProperty(value:string):string  {

    console.log('displayStateProperty');
    console.log(value);
    console.log(this.State_List);
    if (value && this.State_List){
     
      let state:any = this.State_List.find(obj => obj.state_id.toString() == value) ;
      console.log( state);

      if (state )
      return state.state_name;
    }
    return '';
  }  

  public displayCountryProperty(value:string):string  {
    if (value && this.Country_List ){
      let country:any = this.Country_List.find(obj => obj.country_id.toString() == value) ;
      if (country )
      return country.country_name;
    }
    return '';
  }
  //#endregion

  public ClearObject()
  {
    if (!this.Selected_Employee_Course)
    this.Selected_Employee_Course = new ITBLShamelSCCourse();
    this.Selected_Employee_Course.init();  
    this.Selected_Employee_Course.id= this.id ; 
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

    if (this.Selected_Employee_Course  &&
      this.Selected_Employee_Course.serial<=0)
      if (this.ValidateForm())
        this.sccourseService.add(this.Selected_Employee_Course).toPromise().then(res => {
          console.log(res)
          if (res == 1)
        {
          this.ClearObject();
          this.ClearForm();
        }else
        {



        }
    });
   
   else if (this.Selected_Employee_Course  &&
             this.Selected_Employee_Course.serial>0)
      this.sccourseService.update(this.Selected_Employee_Course).toPromise().then(res => {
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



    if (!this.course_id.value || this.course_id.value <=0)
    {
      console.log('error1');
      this.course_id.setErrors({ invalid: true ,required:true});
      result = false;
      
    }
      
    if (!this.specification_id.value || this.specification_id.value<=0)
    {
      console.log('error2');
      this.specification_id.setErrors({'Phone Number does not exist.': true});
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

addEventStartDate(type: string, event: MatDatepickerInputEvent<Date>) {




  this.Selected_Employee_Course.startdate = moment(event.value).format('YYYY/MM/DD');

}

addEventEndDate(type: string, event: MatDatepickerInputEvent<Date>) {

  this.Selected_Employee_Course.enddate = moment(event.value).format('YYYY/MM/DD');

}


}
