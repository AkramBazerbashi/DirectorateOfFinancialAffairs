
import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TBLShamelOvertimeEmployeeModifyComponent } from '../../tblShamelOvertimeEmployee/tblshamel-overtime-employee-modify/tblshamel-overtime-employee-modify.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as moment from 'moment';
import { TBLShamelOvertimeEmployee } from 'src/app/modules/shared/models/finance_department/broker/TBLShamelOvertimeEmployee';
import { TBLShamelOvertimeEmployeeService } from 'src/app/modules/shared/services/finance_department/broker/tblshamel-overtime-employee.service';
import { ConfirmationDialogComponent } from '../../common/confirmation-dialog/confirmation-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tblshamel-overtime-employee-list',
  templateUrl: './tblshamel-overtime-employee-list.component.html',
  styleUrls: ['./tblshamel-overtime-employee-list.component.scss']
})
export class TBLShamelOvertimeEmployeeListComponent implements OnInit {
  //To Load Data From Server Based On PageIndex
  PageIndex: number = 1;

  // Reactive Filter Form 
  Form: FormGroup;
  fcl_serial: FormControl;
  fcl_fname: FormControl;
  fcl_lname: FormControl;
  fcl_father: FormControl;
  fcl_mother: FormControl;
  fcl_birthdate: FormControl;
  fcl_sex_name: FormControl;
  fcl_servicedayes: FormControl;
  fcl_servicedayes_operator: FormControl;


  // List For Table
  overtime_employee_List: TBLShamelOvertimeEmployee[] = [];

  // Selected  overtime_employee
  selected_overtime_employee: TBLShamelOvertimeEmployee;

  //Table Column To Dispaly
  displayedColumns: string[] = ['serial', 'fname', 'lname', 'father', 'mother', 'birthdate',
    'sexname', 'servicedayes', 'action'];

  //Data Source For MatTable
  dataSource = new MatTableDataSource<TBLShamelOvertimeEmployee>(this.overtime_employee_List);

  // Interface Collect Parameters'Search  
  Search_Request: any = {};


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<TBLShamelOvertimeEmployee>;



  // constructor First Method Call 
  constructor(public dataServ: TBLShamelOvertimeEmployeeService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer,
  ) {

    // Init dataSource
    this.dataSource = new MatTableDataSource<TBLShamelOvertimeEmployee>(this.overtime_employee_List);

    //Build Form
    this.Form = new FormGroup({});
    this.fcl_serial = new FormControl();
    this.fcl_fname = new FormControl();
    this.fcl_lname = new FormControl();
    this.fcl_father = new FormControl();
    this.fcl_mother = new FormControl();
    this.fcl_birthdate = new FormControl();
    this.fcl_sex_name = new FormControl();
    this.fcl_servicedayes = new FormControl();
    this.fcl_servicedayes_operator = new FormControl();
    this.Form.addControl('serial', this.fcl_serial);
    this.Form.addControl('fName', this.fcl_fname);
    this.Form.addControl('lname', this.fcl_lname);
    this.Form.addControl('father', this.fcl_father);
    this.Form.addControl('mother', this.fcl_mother);
    this.Form.addControl('birthdate', this.fcl_birthdate);
    this.Form.addControl('sex_name', this.fcl_sex_name);
    this.Form.addControl('servicedayes', this.fcl_servicedayes);
    this.Form.addControl('servicedayes_operator', this.fcl_servicedayes_operator);


    // Init Selected overtime_employee_List
    this.selected_overtime_employee = {
      serial: 0,
      fname: '',
      lname: '',
      father: '',
      mother: '',
      birthdate: moment("01- 01-2022", 'MM-DD-YYYY').toDate(),
      sex_name: '',
      servicedayes: 0,
    };
    this.FillTable();


  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    // this.FillTable();
  }


  ngOnInit(): void {

  }

  // Call Server to Fetch Data And Then To Concat to Result Output List 
  public async FillTable() {


    try {

      // Prepare Request >>> from Backend Swager
      this.Search_Request = {
        serial: this.fcl_serial.value,
        fName: this.fcl_fname.value,
        lname: this.fcl_lname.value,
        father: this.fcl_father.value,
        mother: this.fcl_mother.value,
        birthdate: this.fcl_birthdate.value,
        sex_name: this.fcl_sex_name.value,
        servicedayes: this.fcl_servicedayes.value,
        servicedayes_operator: this.fcl_servicedayes_operator.value
      }
      // call Search
      this.dataServ.Search(this.Search_Request, this.PageIndex).subscribe(
        (data: TBLShamelOvertimeEmployee[] )=> {

          // if Success 
          if (data != null && data .length >0) {
            this.overtime_employee_List = this.overtime_employee_List.concat(data);

          } else {
            this.overtime_employee_List = [];
          }
          this.dataSource.data = this.overtime_employee_List;

        }
      )

    } catch (ex: any) { }


  }

  OnSearch()
  {
    this.PageIndex =1;
    this.FillTable();
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }












  Add(name: string): void {
    // Init selected_overtime_employee
    this.selected_overtime_employee = {
      serial: 0,
      fname: '',
      lname: '',
      father: '',
      mother: '',
      birthdate: moment("01- 01-2022", 'MM-DD-YYYY').toDate(),
      sex_name: '',
      servicedayes: 0,
    };

    const dialogRef = this.dialog.open(TBLShamelOvertimeEmployeeModifyComponent, {
      height: '60%',
      width: '80%',
      data: { obj: this.selected_overtime_employee }
    });

    dialogRef.afterClosed().toPromise().then(result => {
      console.log(result);
      if (result) {
        this.FillTable();
        this.dataSource.paginator = this.paginator;
        this.snackBar.open('تمت الإضافة', '', {
          duration: 2000,
        });
      }
    });
  }


  async Delete(element: TBLShamelOvertimeEmployee) {
    try {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'هل أنت متأكد من الحذف?',
          buttonText: {
            ok: 'نعم',
            cancel: 'لا'
          }
        }
      });



      dialogRef.afterClosed().toPromise().then((confirmed: boolean) => {
        if (confirmed) {
          if (element?.serial != null && element.serial > 0)
            this.dataServ.delete(element?.serial).subscribe
              (
                data => {
                  this.FillTable();
                }

              )




          this.dataSource.paginator = this.paginator;
          this.snackBar.open('تم الحذف', '', {
            duration: 2000,
          });



        }
      });
    } catch (ex: any) {

    }

  }


  async Update(element: TBLShamelOvertimeEmployee) {
    if (element) {
      this.selected_overtime_employee = element;

      const dialogRef = this.dialog.open(TBLShamelOvertimeEmployeeModifyComponent, {
        height: '60%',
        width: '80%',
        data: { obj: this.selected_overtime_employee }
      });

      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();

        if (result)
          this.snackBar.open('تم التعديل', '', {
            duration: 2000,
          });
      });

    }


  }
 
  onScroll() {
    console.log(this.PageIndex);
    this.PageIndex = this.PageIndex + 1;
    console.log(this.PageIndex);
    this.FillTable();
  }
}
