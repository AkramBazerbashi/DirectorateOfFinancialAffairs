import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { IEmployeeNameList } from '../../../../shared/models/employees_department/IEmployeeNameList';
import { IGlobalEmployeeList } from '../../../../shared/services/employees_department/IGlobalEmployeeList';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../../../shared/services/employees_department/employee-service.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.scss']
})
export class DeleteemployeeComponent implements OnInit {

  SelectedEmp:TBLShamelEmployee;
  
  DeleteForm: FormGroup ;
  autocomplete_EmployeeName = new FormControl();
  input_Employee_ID =new FormControl();

  Payrol_ID =new FormControl();
  Computer_ID =new FormControl();
  Global_ID =new FormControl();
  Insurance_ID =new FormControl();

  filteredEmployeeNameList: IEmployeeNameList[];
  public height: string;
  EmployeeNameList:IEmployeeNameList[] = [];
 
  currentChildComponent:string;


  
  constructor(private fb: FormBuilder,
    public restApi:EmployeeServiceService,
    public GlobalEmployeeList : IGlobalEmployeeList  ) {
      if (IGlobalEmployeeList.EmployeeNameList && IGlobalEmployeeList.EmployeeNameList.length>0)
        this.EmployeeNameList= IGlobalEmployeeList.EmployeeNameList;
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
    this.DeleteForm = this.fb.group({
      });
      this.DeleteForm .addControl('autocomplete_EmployeeName',this.autocomplete_EmployeeName);
      this.DeleteForm .addControl('input_Employee_ID',this.input_Employee_ID);
      this.DeleteForm .addControl('Payrol_ID',this.Payrol_ID);
      this.DeleteForm .addControl('Computer_ID',this.Computer_ID);
      this.DeleteForm .addControl('Global_ID',this.Global_ID);
      this.DeleteForm .addControl('Insurance_ID',this.Insurance_ID);


      

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
    console.log('Book changed...');
    let selectedBook = event.option.value;
    console.log( event.option);
    console.log( event.option.id);

    console.log(selectedBook);

    this.restApi.search_by_id(event.option.id).subscribe(
      (data:any) => {
        this.SelectedEmp=data;

        this.currentChildComponent = "1"; 


        this.Payrol_ID.setValue(this.SelectedEmp.Payrol_ID) ;
        this.Computer_ID.setValue(this.SelectedEmp.Computer_ID) ;
        this.Global_ID.setValue(this.SelectedEmp.Global_ID) ;
        this.Insurance_ID.setValue(this.SelectedEmp.Insurance_ID) ;

        this.input_Employee_ID.setValue(this.SelectedEmp.id)    ;
        console.log(this.currentChildComponent);
        

    });

  }

  Computer_ID_Filter(val: any) {
    



    this.restApi.search_by_Computer_ID(val).subscribe(
      (data:any) => {
        this.SelectedEmp=data;
        this.Payrol_ID.setValue(this.SelectedEmp.Payrol_ID) ;
        this.Computer_ID.setValue(this.SelectedEmp.Computer_ID) ;
        this.Global_ID.setValue(this.SelectedEmp.Global_ID) ;
        this.Insurance_ID.setValue(this.SelectedEmp.Insurance_ID) ;

        this.input_Employee_ID.setValue(this.SelectedEmp.id)    ;
        console.log(this.currentChildComponent);

    });

   }

   Employee_ID_Filter(val: any) {

    console.log(val);
    
    this.restApi.search_by_id(val).subscribe(
      (data:any) => {
        this.SelectedEmp=data;
        console.log(this.SelectedEmp.Mother);
        this.autocomplete_EmployeeName.setValue(this.SelectedEmp.id);
        this.Payrol_ID.setValue(this.SelectedEmp.Payrol_ID) ;
        this.Computer_ID.setValue(this.SelectedEmp.Computer_ID) ;
        this.Global_ID.setValue(this.SelectedEmp.Global_ID) ;
        this.Insurance_ID.setValue(this.SelectedEmp.Insurance_ID) ;

        this.input_Employee_ID.setValue(this.SelectedEmp.id)    ;
        console.log(this.currentChildComponent);

    });
   }
  
   public delete_employee()
   {
     if (  this.input_Employee_ID.value )
   
     this.restApi.delete_employee(this.SelectedEmp.id.toString()).subscribe
     (data=>{
       
     }
   
     );
   
   
   }
   
}
