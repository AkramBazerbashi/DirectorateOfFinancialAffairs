import { TBLShamelCertificateComponent } from './../../tblshamelcertificate/tblshamelcertificatelist/tblshamelcertificatelist.component';
import { TblshamelspecificationService } from '../../../../shared/services/employees_department/tblshamelspecification.service';

import { Component, Inject, OnInit } from '@angular/core';
import { TblshamelrankService } from '../../../../shared/services/employees_department/tblshamelrank.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITBLShamelSpecification } from '../../../../shared/models/employees_department/ITBLShamelSpecification';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITBLShamelCertificate } from 'src/app/modules/shared/models/employees_department/ITBLShamelCertificate';
import { ITBLShamelCountry } from 'src/app/modules/shared/models/employees_department/ITBLShamelCountry';
import { ITBLShamelRank } from 'src/app/modules/shared/models/employees_department/ITBLShamelRank';
import { ITBLShamelSCEducation } from 'src/app/modules/shared/models/employees_department/ITBLShamelSCEducation';
import { ITBLShamelState } from 'src/app/modules/shared/models/employees_department/ITBLShamelState';
import { TBLShamelCertificateService } from 'src/app/modules/shared/services/employees_department/tblshamel-certificate.service';
import { TblshamelcountryService } from 'src/app/modules/shared/services/employees_department/tblshamelcountry.service';
import { TblshamelsceducationService } from 'src/app/modules/shared/services/employees_department/tblshamelsceducation.service';
import { TblshamelstateService } from 'src/app/modules/shared/services/employees_department/tblshamelstate.service';

@Component({
  selector: 'app-tblshamelsceducationmodify',
  templateUrl: './tblshamelsceducationmodify.component.html',
  styleUrls: ['./tblshamelsceducationmodify.component.scss']
})
export class TblshamelsceducationmodifyComponent implements OnInit {

  //Link To Employee 
  id:number;
  Selected_Employee_Education :ITBLShamelSCEducation;

  //Array Of AutoComplere With Filter
  Rank_List: ITBLShamelRank[]=[];
  filteredRankOptions: Observable<ITBLShamelRank[]>;

  State_List :ITBLShamelState[]=[];
  filteredStateOptions: Observable<ITBLShamelState[]>;

  Country_List :ITBLShamelCountry[]=[];
  filteredCountryOptions: Observable<ITBLShamelCountry[]>;

  Certificate_List :ITBLShamelCertificate[]=[];
  filteredCertificateOptions: Observable<ITBLShamelCertificate[]>;

  Specification_List :ITBLShamelSpecification[]=[];
  filteredSpecificationOptions: Observable<ITBLShamelSpecification[]>;  

 
  
  // Access To Element in Form
  Form: FormGroup ;
  input_certificate_id   = new FormControl({value: '', disabled: false},[Validators.required, Validators.minLength(5)]);
  input_specification_id = new FormControl('',[ Validators.required ]);
  input_graduationyear = new FormControl('',[ Validators.required ]);
  input_country_id = new FormControl({value: 'سوريا', disabled: false},[Validators.required, Validators.minLength(5)]);
  input_city_id = new FormControl('',[ Validators.required ]);
  input_rank_id = new FormControl('',[ Validators.required ]);
  input_studyduration = new FormControl('',[ Validators.required ]);
  

  submitted = false;


  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {obj: ITBLShamelSCEducation,id:number},
    public educationService:TblshamelsceducationService,
    public countryService:TblshamelcountryService,
    public stateService:TblshamelstateService,
    public rankService:TblshamelrankService,
    public CertificateService:TBLShamelCertificateService,  
    public specificationService:TblshamelspecificationService ,
    private fb: FormBuilder
  ) {

    this.BuildForm();
     this.FillArrayUsingService();
    this.ClearForm();
    if (data && data.obj && data.id)
    { 
      this.id = data.id;     
      this.Selected_Employee_Education = data.obj;
      if (this.Selected_Employee_Education.serial <=0 ) 
      {
        this.ClearObject();

        this.ClearForm();
      }else
      {
        this.SetValue();  
      } 

        
      

    }
   }
   //#endregion

   //#region  Init Component

   ngOnInit(): void {
  }

    public async FillArrayUsingService()
   {
     try{
      this.stateService.list().toPromise().then(
        (data:any)=>
        {      
          this.State_List=data;  
          this.input_city_id.setValue(this.Selected_Employee_Education.city_id);

          console.log("State_List");
          console.log(data);
        }
      );
      this.filteredStateOptions = this.input_city_id.valueChanges
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
        this.input_specification_id.setValue(this.Selected_Employee_Education.specification_id);
       
      }
    );
    this.filteredSpecificationOptions = this.input_specification_id.valueChanges
    .pipe(
      startWith(''),    
      map(value => value   && typeof value === 'string'  ? this._filteredSpecification(value) : this.Specification_List.slice() )
    );

    }catch(Exception : any)
    {}

    try{
    this.CertificateService.list().toPromise().then(
      (data:any)=>
      {      
        this.Certificate_List=data;          
        this.input_certificate_id.setValue(this.Selected_Employee_Education.certificate_id);
        console.log("Certificate_List");
        console.log(data);
      }
    );
    this.filteredCertificateOptions = this.input_certificate_id.valueChanges
    .pipe(
      startWith(''),     
      map(value => value   && typeof value === 'string'  ? this._filteredCertificate(value) : this.Certificate_List.slice())
    );

    }catch(Exception : any){}

    try{
    this.countryService.list().toPromise().then(
      (data:any)=>
      {      
        this.Country_List=data;          
        this.input_country_id.setValue(this.Selected_Employee_Education.country_id);
        console.log("country");
        console.log(data);
      }
    );
    this.filteredCountryOptions = this.input_country_id.valueChanges
    .pipe(
      startWith(''),     
      map(value => value   && typeof value === 'string'  ? this._filteredCounty(value) : this.Country_List.slice())
    );
    }catch(Exception : any){}

    try{
    this.rankService.list().toPromise().then(
      (data:any)=>
      {      

        this.Rank_List=data;          
        this.input_rank_id.setValue(this.Selected_Employee_Education.rank_id);
        console.log("rank");
        console.log(data);
      }
    );
    this.filteredRankOptions = this.input_rank_id.valueChanges
    .pipe(
      startWith(''),      
      map(value => value   && typeof value === 'string' ? this._filteredRank(value) : this.Rank_List.slice())
    );
    }catch(Exception : any){}

   }
  
   public BuildForm()
   {
     try{    
      this.Form = this.fb.group({
        });
        this.Form .addControl('input_certificate_id',this.input_certificate_id);
        this.input_certificate_id.updateValueAndValidity();
        this.Form .addControl('input_city_id',this.input_city_id);
        this.Form .addControl('input_country_id',this.input_country_id);
        this.Form .addControl('input_graduationyear',this.input_graduationyear);
        this.Form .addControl('input_rank_id',this.input_rank_id);
        this.Form .addControl('input_specification_id',this.input_specification_id);
        this.Form .addControl('input_studyduration',this.input_studyduration);    
      }catch(Exception:any){}
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
  private _filteredCertificate(value: string): ITBLShamelCertificate[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Certificate_List.filter(obj => obj.certificate_name.includes(filterValue) );
    }
    return this.Certificate_List.slice();
  }
  private _filteredCounty(value: string): ITBLShamelCountry[] {    
    if (value)
    {
      const filterValue = value ;
      return this.Country_List.filter(obj => obj.country_name.includes(filterValue) );

    }
    return this.Country_List.slice();

  }
  private _filteredRank(value: string): ITBLShamelRank[] {    
    if (value)
    {
    const filterValue = value ;
    return this.Rank_List.filter(obj => obj.rank_name.includes(filterValue) );
    }
    return this.Rank_List.slice();
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


    this.input_city_id.reset();
    this.input_country_id.reset();
    this.input_graduationyear.reset();
    this.input_studyduration.reset();
    this.input_rank_id.reset();
    this.input_specification_id.reset();
    this.input_studyduration.reset();
    this.input_certificate_id.reset();


  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
if (this.Selected_Employee_Education )
{


    this.input_city_id.setValue(this.Selected_Employee_Education.city_id);
    this.input_country_id.setValue(this.Selected_Employee_Education.country_id);
    this.input_graduationyear.setValue(this.Selected_Employee_Education.graduationyear);
    this.input_rank_id.setValue(this.Selected_Employee_Education.rank_id);
    this.input_specification_id.setValue(this.Selected_Employee_Education.specification_id);
    this.input_studyduration.setValue(this.Selected_Employee_Education.studyduration);
  }
  }catch(ex: any)
  {

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_Employee_Education )
{
  console.log( this.input_city_id.value);
    this.Selected_Employee_Education.city_id = this.input_city_id.value;
    this.Selected_Employee_Education.country_id = this.input_country_id.value;
    this.Selected_Employee_Education.graduationyear = this.input_graduationyear.value;    
    this.Selected_Employee_Education.rank_id = this.input_rank_id.value;
    this.Selected_Employee_Education.specification_id = this.input_specification_id.value;
    this.Selected_Employee_Education.studyduration =this.input_studyduration.value;
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectCountryChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_Education )
      this.Selected_Employee_Education.country_id = event.option.value;
   

  }

  public OnSelectStateChange(event: MatAutocompleteSelectedEvent) {
    if ( event  &&  this.Selected_Employee_Education )
      this.Selected_Employee_Education.city_id = event.option.value;
    

  }

  public OnSelectRankChange(event: MatAutocompleteSelectedEvent) {
    if ( event  &&  this.Selected_Employee_Education )
      this.Selected_Employee_Education.rank_id = event.option.value;
  }


  public OnSelectCertificateChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_Employee_Education )
      this.Selected_Employee_Education.certificate_id = event.option.value;
   
  }

  public OnSelectSpecificationChange(event: MatAutocompleteSelectedEvent) {
  
    if ( event  &&  this.Selected_Employee_Education )
      this.Selected_Employee_Education.specification_id = event.option.value;
   
  }

  //#endregion


  //#region  Display Display Member
  public displayCertificateProperty(value:string):string  {
    if (value && this.Certificate_List){     
      let cer:any = this.Certificate_List.find(cer => cer.certificate_id.toString() == value) ;
      if (cer )
      return cer.certificate_name;
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
    if (value && this.State_List){
     
      let state:any = this.State_List.find(obj => obj.state_id.toString() == value) ;
      if (state )
      return state.state_name;
    }
    return '';
  }

  
  public displayRankProperty(value:string):string  {
    if (value && this.Rank_List ){
     
      let rank:any = this.Rank_List.find(obj => obj.rank_id.toString() == value) ;
      if (rank )
      return rank.rank_name;
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
    if (!this.Selected_Employee_Education)
    this.Selected_Employee_Education = new ITBLShamelSCEducation();
    this.Selected_Employee_Education.init();  
    this.Selected_Employee_Education.id= this.id ; 
  }

  public async Save()
  {
 
    this.submitted = true;

   
    console.log("this.Form.invalid"+this.Form.invalid);
    if (this.Form.invalid) {
      return;
    }

    if (this.Selected_Employee_Education  &&
      this.Selected_Employee_Education.serial<=0)
      if (this.ValidateForm())
        this.educationService.add(this.Selected_Employee_Education).toPromise().then(res => {
          console.log(res)
          if (res == 1)
        {
          this.ClearObject();
          this.ClearForm();
        }else
        {


        }
    });
   
   else if (this.Selected_Employee_Education  &&
             this.Selected_Employee_Education.serial>0)
      this.educationService.update(this.Selected_Employee_Education).toPromise().then(res => {
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
    console.log('this.input_certificate_id'+this.input_certificate_id.value);


    if (!this.input_certificate_id.value || this.input_certificate_id.value <=0)
    {
      console.log('error1');
      this.input_certificate_id.setErrors({ invalid: true ,required:true});
      result = false;
      
    }
      
    if (!this.input_specification_id.value || this.input_specification_id.value<=0)
    {
      console.log('error2');
      this.input_certificate_id.setErrors({'Phone Number does not exist.': true});
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
}
