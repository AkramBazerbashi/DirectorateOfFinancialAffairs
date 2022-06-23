import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { IEmployeeNameList } from '../../../../shared/models/employees_department/IEmployeeNameList';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../../../shared/services/employees_department/employee-service.service';

@Component({
  selector: 'app-employeechangeid',
  templateUrl: './employeechangeid.component.html',
  styleUrls: ['./employeechangeid.component.scss']
})
export class EmployeechangeidComponent implements OnInit {
  
  ChangeEmployeeForm: FormGroup ;
  autocomplete_EmployeeName = new FormControl();
  old_Computer_ID =new FormControl();
  new_Computer_ID =new FormControl();
  SelectedEmp:TBLShamelEmployee;
  EmployeeNameList:IEmployeeNameList[] = [];
  filteredEmployeeNameList: IEmployeeNameList[];
  public height: string;
  
 
  


  constructor(private fb: FormBuilder,
    public restApi:EmployeeServiceService,
    public GlobalEmployeeList : IGlobalEmployeeList  ) {
    
   
      if (IGlobalEmployeeList.EmployeeNameList && IGlobalEmployeeList.EmployeeNameList.length>0)
      {
        this.EmployeeNameList=IGlobalEmployeeList.EmployeeNameList;     
      }
       else
       {
        this.restApi.getEmpFullName("").subscribe(
          (data:any) => {
          
          this.EmployeeNameList=data;   
           
    
        });
       }



  
   

    this.BuildSeachForm();
   }
   

   BuildSeachForm()
   {
    this.ChangeEmployeeForm = this.fb.group({
      });
      this.ChangeEmployeeForm .addControl('autocomplete_EmployeeName',this.autocomplete_EmployeeName);
      this.ChangeEmployeeForm .addControl('old_Computer_ID',this.old_Computer_ID);
      this.ChangeEmployeeForm .addControl('new_Computer_ID',this.new_Computer_ID);
      

   }


  
  
  
     ngOnInit() {

     


      // Listen for changes to the input
    this.autocomplete_EmployeeName.valueChanges
    .pipe(
      startWith(''),
      map(value => {
        // Filter the options
        this.filteredEmployeeNameList = this.EmployeeNameList.filter(option => option.FullName.includes(value.toLowerCase()));
        console.log(this.filteredEmployeeNameList);

        // Recompute how big the viewport should be.
        if (this.filteredEmployeeNameList.length < 4) {
          this.height = (this.filteredEmployeeNameList.length * 50) + 'px';
        } else {
          this.height = '200px'
        }
      })
    ).subscribe();


     }

    private _filterEmployees(value: string): IEmployeeNameList[] {


    
    const filterValue = value.toLowerCase();

    

    return this.EmployeeNameList.filter(state => state.FullName.toLowerCase().includes(filterValue) );
  }

  OnSelectEmpFullNameChange(event: MatAutocompleteSelectedEvent) {
   
    let selectedBook = event.option.value;
   
    console.log(selectedBook);

    this.restApi.search_by_id(event.option.id).subscribe(
      (data:any) => {
        this.SelectedEmp=data;      
        this.old_Computer_ID.setValue(this.SelectedEmp.Computer_ID) ;        

    });

  

  }

public change_employee_id()
{
  if (  this.old_Computer_ID.value && this.new_Computer_ID.value)

  this.restApi.change_employee_id(this.old_Computer_ID.value,this.new_Computer_ID.value).subscribe
  (data=>{
    
  }

  );


}



}
