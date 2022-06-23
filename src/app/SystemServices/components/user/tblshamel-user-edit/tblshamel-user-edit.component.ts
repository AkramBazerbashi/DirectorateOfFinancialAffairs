import { TBLShamelDaeraService } from '../../../../modules/shared/services/employees_department/tblshamel-daera.service';
import { TBLShamelUserService } from '../../../../modules/shared/services/employees_department/tblshamel-user.service';
import { TBLShamelUser } from '../../../../modules/shared/models/employees_department/TBLShamelUser';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TBLShamelDaera } from '../../../../modules/shared/models/employees_department/TBLShamelDaera';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tblshamel-user-edit',
  templateUrl: './tblshamel-user-edit.component.html',
  styleUrls: ['./tblshamel-user-edit.component.scss']
})
export class TBLShamelUserEditComponent implements OnInit,AfterViewInit {

  //Link To Employee   
  Selected_User :TBLShamelUser;

  //Array Of AutoComplere With Filter
  TBLShamelDaera_List :TBLShamelDaera[]=[];
  filteredDaeraOptions: Observable<TBLShamelDaera[]>;  

  @ViewChild('picker') picker: any;
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];
pp:any;
  
  // Access To Element in Form
  Form: FormGroup ;
  User_ID   = new FormControl();
  FullName = new FormControl();
  Daera_ID = new FormControl();
  UserName = new FormControl();
  Password = new FormControl();
  HDSERIAL = new FormControl();
  EnterMinTime= new FormControl();
  EnterMaxTime= new FormControl();
  Enabled = new FormControl();
  imgFile= new FormControl();
  file= new FormControl();
  name = new FormControl();

  //Local Var

 
  loading: boolean = false;

  //#region Constuctor 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {obj: TBLShamelUser},  
    public UserService:TBLShamelUserService,
    public DaeraService:TBLShamelDaeraService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.loading = true;
    if (data && data.obj )
    {       
      this.Selected_User = data.obj;

      
          console.log('fdfd gdf');
        
        //  this.Selected_User.Photo =window.btoa(this.Selected_User.Photo);

        this.Selected_User.Photo = 'data:image/jpg;base64,' + this.Selected_User.Photo;

          console.log(this.Selected_User.Photo);
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

       if (!this.TBLShamelDaera_List || this.TBLShamelDaera_List.length<=0)
       {
         
        this.DaeraService.list().subscribe(
          (data:any)=> {
            this.loading = false;
            console.log('load Daera');
            console.log(data);
            this.TBLShamelDaera_List=data;      
          });


      
       }
       
       this.filteredDaeraOptions = this.Daera_ID.valueChanges
       .pipe(
         startWith(''),        
         map(value => value   && typeof value === 'string'  ? this._filteredDaera(value) : this.TBLShamelDaera_List.slice() )
       );  
     
      
    }catch(Exception : any)
    {}



   }
  
   public BuildForm()
   {
     try{  
      console.log('Build Form' );  
       console.log(this.Selected_User );  
    if (this.Selected_User && this.Selected_User.User_ID>0)
    {

    
      this.User_ID   = new FormControl({value: this.Selected_User.User_ID, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.FullName = new FormControl(this.Selected_User.FullName,[ Validators.required ]);
      this.Daera_ID = new FormControl({value: this.Selected_User.Daera_ID, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.UserName = new FormControl(this.Selected_User.UserName,[ Validators.required ]);


      this.Password = new FormControl(this.Selected_User.Password,[ Validators.required ]);
      this.HDSERIAL = new FormControl(this.Selected_User.HDSERIAL,[ Validators.required ]);
      this.EnterMinTime = new FormControl(this.Selected_User.EnterMinTime,[ Validators.required ]);
      this.EnterMaxTime = new FormControl(this.Selected_User.EnterMaxTime,[ Validators.required ]);
      
      this.Enabled = new FormControl(this.Selected_User.Enabled,[ Validators.required ]);


      
      
      
      
      


    
    }else
    {
      this.User_ID   = new FormControl({value: this.Selected_User.User_ID, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.FullName = new FormControl(this.Selected_User.FullName,[ Validators.required ]);
      this.Daera_ID = new FormControl({value: this.Selected_User.Daera_ID, disabled: false},[Validators.required, Validators.minLength(5)]);
      this.UserName = new FormControl(this.Selected_User.UserName,[ Validators.required ]);


      this.Password = new FormControl(this.Selected_User.Password,[ Validators.required ]);
      this.HDSERIAL = new FormControl(this.Selected_User.HDSERIAL,[ Validators.required ]);
      this.EnterMinTime = new FormControl(this.Selected_User.EnterMinTime,[ Validators.required ]);
      this.EnterMaxTime = new FormControl(this.Selected_User.EnterMaxTime,[ Validators.required ]);
      
      this.Enabled = new FormControl(this.Selected_User.Enabled,[ Validators.required ]);

    }

      this.Form = this.fb.group({
        });
        this.Form .addControl('User_ID',this.User_ID);        
        this.Form .addControl('FullName',this.FullName);
        this.Form .addControl('Daera_ID',this.Daera_ID);
        this.Form .addControl('UserName',this.UserName);        
        this.Form .addControl('Password',this.Password);
        this.Form .addControl('HDSERIAL',this.HDSERIAL);
        this.Form .addControl('EnterMinTime',this.EnterMinTime);
        this.Form .addControl('EnterMaxTime',this.EnterMaxTime);    
        this.Form .addControl('Enabled',this.Enabled);
        this.Form .addControl('imgFile',this.imgFile);
        this.Form .addControl('file',this.file);
        this.Form .addControl('name',this.name);

  

      }catch(Exception:any){
        console.log(Exception);
      }
   }
   //#endregion


   //#region Filter Of  

   private _filteredDaera(value: string): TBLShamelDaera[] {    
    if (value)
    {
    const filterValue = value ;
    return this.TBLShamelDaera_List.filter(obj => obj.Daera_Name.includes(filterValue) );
    }
    return this.TBLShamelDaera_List.slice();
  }

  
  //#endregion


  //#region SetValue And GetValue Function
  public ClearForm()
  {
    try{
      console.log('ClearForm');
      this.User_ID.reset();
      this.FullName.reset();
      this.Daera_ID.reset();
      this.UserName.reset();
      this.Password.reset();    
      this.HDSERIAL.reset();    
      this.EnterMinTime.reset();    
      this.EnterMaxTime.reset();    
      
      this.Enabled.reset();    


  }catch(ex: any)
  {

  }
  
  }


  //#region SetValue And GetValue Function
  public SetValue()
  {
    try{
   

      console.log(this.Selected_User);
  
this.Form.patchValue(
  {
    
    User_ID:this.Selected_User.User_ID,
    FullName:this.Selected_User.FullName,
    Daera_ID:this.Selected_User.Daera_ID,   
    UserName:this.Selected_User.UserName,
    Password:this.Selected_User.Password,
    HDSERIAL:this.Selected_User.HDSERIAL,
    EnterMinTime:this.Selected_User.EnterMinTime,
    EnterMaxTime:this.Selected_User.EnterMaxTime,    
    Enabled:this.Selected_User.Enabled,
  }
);
this.Daera_ID.setValue(this.Selected_User.Daera_ID);
 
  this.loading = false; 
  console.log('complete');

 

  }catch(ex: any)
  {
    console.log(ex);

  }
  
  }

  public getValue()
  {
    try{

if (this.Selected_User )
{
  
    this.Selected_User.User_ID= this.User_ID.value;
    this.Selected_User.Daera_ID = this.Daera_ID.value;
    this.Selected_User.Enabled= this.Enabled.value;        
    this.Selected_User.FullName= this.FullName.value;

    this.Selected_User.EnterMinTime= this.EnterMinTime.value;
    this.Selected_User.EnterMaxTime= this.EnterMaxTime.value;

    this.Selected_User.UserName= this.UserName.value;
    this.Selected_User.Password= this.Password.value;
    this.Selected_User.HDSERIAL= this.HDSERIAL.value;

    
    
    
  }
  }catch(ex: any)
  {

  }
  
  }
//#endregion

 

  //#region OnSelect Function

  public OnSelectDaeraChange(event: MatAutocompleteSelectedEvent) {
    if (event  && this.Selected_User )
      this.Selected_User.Daera_ID= event.option.value;  
  }

 
  

  //#endregion


  //#region  Display Display Member
  public displayDaeraProperty(value:string):string  {
    if (value && this.TBLShamelDaera_List){     
      let Daera:any = this.TBLShamelDaera_List.find(crs => crs.Daera_ID.toString() == value) ;
      if (Daera)
      return Daera.Daera_Name;
    }
    return '';
  }


  
 

  public ClearObject()
  {
    if (!this.Selected_User)
    this.Selected_User = new TBLShamelUser();
  
  }

//btoa("username:temppass")
/*
Use the btoa() function to encode:
The WindowOrWorkerGlobalScope.btoa() method creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

To decode, you can use the atob() function:
console.log(atob("dXNlcm5hbWU6dGVtcHBhc3M=")); // username:temppass
*/


   utf8_to_b64( str :string) :string
   {
    return window.btoa(unescape(encodeURIComponent( str )));
  }
  

   b64_to_utf8( str:string ) :string{
    return decodeURIComponent(escape(window.atob( str )));
  }

  

  public async Save()
  {
 



   
    console.log("this.Form.invalid"+this.Form.errors);

    /*
    if (this.Form.invalid == true) {
      return;
    }
*/


if (
  this.Selected_User.Photo &&
  this.Selected_User.Photo.length>0 )
  {
    this.Selected_User.Photo =this.Selected_User.Photo.toString();
  }



    this.getValue();

    if (this.Selected_User  &&
      this.Selected_User.User_ID<=0)
      {

      if (this.ValidateForm())
        this.UserService.add(this.Selected_User).toPromise().then(res => {
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
   else if (this.Selected_User  &&
             this.Selected_User.User_ID>0)
             {
               console.log('update');
               console.log(this.Selected_User);

      this.UserService.update(this.Selected_User).toPromise().then(res => {
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



    

    console.log("result vaildarw"+result);
    return result;
    
  }

  public onReset(): void {
   
    this.Form.reset();
  }
/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.Form.controls[control].hasError(error);
}



addEventDocumentDate(type: string, event: MatDatepickerInputEvent<Date>) {

  //this.Selected_User.documentdate = moment(event.value).format('YYYY/MM/DD');

}

onImageChange(e:any) {

  if(e.target.files && e.target.files.length) {

  // HTML5 FileReader API
  let filereader = new FileReader();
  filereader.readAsDataURL(e.target.files[0]);


  filereader.onload = (e: any) => {
    let image = new Image();    
    image.src = e.target.result;
    image.onload = rs => {
       this.Selected_User.Photo  =e.target.result;
    };
  };
  filereader.onerror = function (error:any) {
    console.log('Error: ', error);
    console.log('Error: ', error);
  };
  
  }


}

}
