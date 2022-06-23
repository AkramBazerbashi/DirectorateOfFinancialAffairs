import { TBLShamelUser } from '../../../../modules/shared/models/employees_department/TBLShamelUser';
import { TBLShamelUserService } from '../../../../modules/shared/services/employees_department/tblshamel-user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCard } from '@angular/material/card';
import { TBLShamelPrivilageServiceService } from '../../../../modules/shared/services/employees_department/tblshamel-privilage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent implements OnInit {

  loginForm: FormGroup;

UserName = '';

password = '';

matcher = new MyErrorStateMatcher();

isLoadingResults = false;

LoginResultState:string ='';

  constructor(private formBuilder: FormBuilder, 
    private router: Router, public ShemlUserService:TBLShamelUserService,
    public shamelPrivilige:TBLShamelPrivilageServiceService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName : [null, Validators.required],  
      Password : [null, Validators.required]  
    });

    
  }

  Login() {

let user : TBLShamelUser = new TBLShamelUser ();
user.UserName = this.loginForm.controls["UserName"].value;
user.Password = this.loginForm.controls["Password"].value;
this.isLoadingResults = true;

    this.ShemlUserService.login(user)
  
      .subscribe((res:any) => {
  
        console.log('Result of Login ');
        console.log(res);
        this.isLoadingResults = false; 
  if (res ==='Error')
  {

    this.LoginResultState = 'اسم المستحدم أو كلمة السر خاطئة ';
   
  }else if (res.token) {  
        
          localStorage.setItem('token', res.token);
          localStorage.setItem('User', res.User);


          this.shamelPrivilige.List_User_Windows('00100');

          this.router.navigate(['Userlist']);

        }
        
        return; 
      }, (err) => {
  
        this.LoginResultState = 'حدث خطأ اثناء تسجيل الدخول ';
        console.log(err);
        this.isLoadingResults = false;
      });
  
  }


}
/** Error when invalid control is dirty, touched, or submitted. */

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {

    const isSubmitted = form && form.submitted;

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));

  }

}