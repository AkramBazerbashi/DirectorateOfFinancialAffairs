import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { startWith, map, BehaviorSubject, filter, distinctUntilChanged, debounceTime, switchMap, tap, finalize } from 'rxjs';
import { IEmployeeNameList } from '../../../shared/models/employees_department/IEmployeeNameList';
import { IGlobalEmployeeList } from '../../../shared/services/employees_department/IGlobalEmployeeList';
import { TBLShamelEmployee } from '../../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../../shared/services/employees_department/employee-service.service';
import { EmployeeSeachDialogComponent } from '../tblshamelemployee/employee-seach-dialog/employee-seach-dialog.component';

@Component({
  selector: 'app-employee-search-bar',
  templateUrl: './employee-search-bar.component.html',
  styleUrls: ['./employee-search-bar.component.scss']
})
export class EmployeeSearchBarComponent implements OnInit {
  isLoading:any;
  errorMsg:any;

  SearchForm: FormGroup ;
  autocomplete_EmployeeName = new FormControl();
  input_Employee_Computer_ID =new FormControl();
  input_Employee_ID =new FormControl();

  EmployeeNameList:IEmployeeNameList[] = [];
  filteredEmployeeNameList: IEmployeeNameList[];
  
  SelectedEmp :  BehaviorSubject<TBLShamelEmployee> = new BehaviorSubject(new TBLShamelEmployee());
  @Output() OnFindEmployee = new EventEmitter<TBLShamelEmployee>();

  constructor( private fb: FormBuilder,
    public restApi:EmployeeServiceService,
    public GlobalEmployeeList : IGlobalEmployeeList,
    public dialog: MatDialog, ) {

      this.SelectedEmp.subscribe(data =>
        {
          let I:IEmployeeNameList =
          {
            Computer_ID : data.Computer_ID,
            FullName : data.FullName,
            Payrol_ID : data.Payrol_ID,
            id:data.id,
            Global_ID:data.Global_ID,
            Insurance_ID:data.Insurance_ID.toString()
          };

          this.input_Employee_Computer_ID.setValue(this.SelectedEmp.getValue().Computer_ID) ;
          this.input_Employee_ID.setValue(this.SelectedEmp.getValue().id)    ;
          this.autocomplete_EmployeeName.setValue(I);

          this.OnFindEmployee.emit(data);
        }
      );

      if (IGlobalEmployeeList.EmployeeNameList && IGlobalEmployeeList.EmployeeNameList.length>0){
        this.EmployeeNameList=IGlobalEmployeeList.EmployeeNameList;   
       }else{
    
        this.restApi.getEmpFullName("").subscribe(
          (data:any) => {
          
          this.EmployeeNameList=data;   
           console.log(data);
    
        });
    
       }
       this.BuildSeachForm();

     }

     BuildSeachForm()
     {
      this.SearchForm = this.fb.group({
        });
        this.SearchForm .addControl('autocomplete_EmployeeName',this.autocomplete_EmployeeName);
        this.SearchForm .addControl('input_Employee_ID',this.input_Employee_ID);
        this.SearchForm .addControl('input_Employee_Computer_ID',this.input_Employee_Computer_ID);
        
  
     }
  ngOnInit(): void {


    this.autocomplete_EmployeeName.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= 4
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredEmployeeNameList = [];
          this.isLoading = true;
        }),
        switchMap(value => 
          this.restApi.getEmpFullName(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        if (data == undefined) {
          this.errorMsg = '';
          this.filteredEmployeeNameList = [];
        } else {
          this.errorMsg = "";
          this.filteredEmployeeNameList= data;
        }
        console.log('أنا عون');
        console.log(this.filteredEmployeeNameList);
      });

    }


 OnSelectEmpFullNameChange(event: MatAutocompleteSelectedEvent) {
  let x :IEmployeeNameList = event.option.value as IEmployeeNameList;
  if (x && x.id)
  {
    
   this.restApi.search_by_id(x.id.toString()).subscribe(
    (data:any) => {
      this.SelectedEmp .next(data);     
      
  });


  }
 }

 display_Employee(emp : IEmployeeNameList)
 {
  return emp && emp.FullName ? emp.FullName : '';
 }

 Computer_ID_Filter(val: any) {

  if (val && _isNumberValue(val) )
  {
    this.restApi.search_by_Computer_ID(val).subscribe(
      (data:any) => {
        
        this.SelectedEmp .next(data);
        
 
    });

  }


  }

  Employee_ID_Filter(val: any) {

    if (val && _isNumberValue(val) )
    {
   
   this.restApi.search_by_id(val).subscribe(
     (data:any) => {        
       this.SelectedEmp .next(data);
     
   });
  }
  }


  btnNextId(id:string)
  {
    if (id &&  _isNumberValue(id))
  {
    this.restApi.next_id(id).subscribe(
      (data:any) => {
       

            
        this.SelectedEmp.next(data);
    });
  }
  }

  btnPrevId(id:string)
  {
    if (id &&  _isNumberValue(id))
    {
    this.restApi.prev_id(id).subscribe(
      (data:any) => {
        console.log('انا ضمن prev');                      
            console.log(data);
        this.SelectedEmp.next(data); 
    });
  }
  }

  btnNextComputer_ID(Computer_ID:string)
  {
    if (Computer_ID && _isNumberValue(Computer_ID) )
  {
    
    this.restApi.next_Computer_ID(Computer_ID).subscribe(
      (data:any) => {
      
     
        this.SelectedEmp .next(data);
    });
  }
  }

  btnPrevComputer_ID(Computer_ID:string)
  {
    console.log(Computer_ID);
    console.log(_isNumberValue(Computer_ID));
    console.log(Computer_ID &&  _isNumberValue(Computer_ID) ==true);


    if (Computer_ID &&  _isNumberValue(Computer_ID) ==true)
    {
      console.log('dsdsdsd');

    this.restApi.prev_Computer_ID(Computer_ID).subscribe(
      (data:any) => {
        
        this.SelectedEmp.next(data);  

             
         
    });
  }
  }

  openEmpSearchDialog() {
    const dialogConfig = new MatDialogConfig();    
    const dialogRef = this.dialog.open(EmployeeSeachDialogComponent,dialogConfig );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
