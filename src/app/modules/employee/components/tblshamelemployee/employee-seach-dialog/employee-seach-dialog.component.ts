
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TBLShamelEmployee } from '../../../../shared/models/employees_department/TBLShamelEmployee';
import { EmployeeServiceService } from '../../../../shared/services/employees_department/employee-service.service';

@Component({
  selector: 'app-employee-seach-dialog',
  templateUrl: './employee-seach-dialog.component.html',
  styleUrls: ['./employee-seach-dialog.component.scss']
})
export class EmployeeSeachDialogComponent implements OnInit {
  fname :string ;
  lname:string;
  mother:string;
  father:string;
  selection = new SelectionModel<TBLShamelEmployee>(true, []);
  employee_List=new MatTableDataSource<TBLShamelEmployee>([]) ;
  displayedColumns: string[] = ['fname', 'lname', 'mother', 'father'];
  selectedEmployee:TBLShamelEmployee;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialogRef: MatDialogRef<EmployeeSeachDialogComponent>,public restApi:EmployeeServiceService) { 

    

  }

  ngOnInit(): void {
    this.father = "";
    this.lname = "";
    this.mother = "";
    this.fname = "";
    this.employee_List.paginator = this.paginator;
  }

  btnSearchClick (event:any)
  {
    console.log("fgsdfg sdgsd");
    setTimeout(() => {

    this.restApi.search_by_employee_name_info(this.fname,this.lname,this.mother,this.father).subscribe(
      (data:any) => {
      
      this.employee_List=new MatTableDataSource<TBLShamelEmployee>(data) ;
       this.employee_List.paginator = this.paginator;

       

    });

  });

  }

  highlight(row:any){
    
    this.selectedEmployee = row;
   
}

close() {
  this.dialogRef.close(this.selectedEmployee);
}

}
