import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TBLShamelSCLegalHoliday } from '../../../../shared/models/employees_department/TBLShamelSCLegalHoliday';
import { TBLShamelSCLEgalHolidayService } from '../../../../shared/services/employees_department/tblshamel-sc-legal-holiday.service';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { TBLShamelSCLEgalHolidayAddComponent } from '../tblshamel-sc-legal-holiday-add/tblshamel-sc-legal-holiday-add.component';

@Component({
  selector: 'app-tblshamel-sc-legal-holiday-list',
  templateUrl: './tblshamel-sc-legal-holiday-list.component.html',
  styleUrls: ['./tblshamel-sc-legal-holiday-list.component.scss']
})
export class TBLShamelSCLEgalHolidayListComponent implements OnInit {
  //Join Variable   
  @Input() id:number;
    
  // List For Table
  employee_List_TBLShamelSCLegalHoliday :TBLShamelSCLegalHoliday []=[];
  selected_employee_ShamelSCLegalHoliday :TBLShamelSCLegalHoliday;
  displayedColumns: string[] = ['duration', 'startdate', 'enddate','documenttype_id','document_number','documentdate','action'];
  
  dataSource : MatTableDataSource<TBLShamelSCLegalHoliday> = new  MatTableDataSource<TBLShamelSCLegalHoliday>([]);

  
  constructor(
    public SCLEgalHolidayService : TBLShamelSCLEgalHolidayService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_List_TBLShamelSCLegalHoliday =[];
      this.FillTable();
     }
  
     ngAfterViewInit() {
  
      
    }
  
  ngOnChanges() {
  
    this.FillTable();
   }
  
   
  ngOnInit(): void {
  }
  
  
  
    public async FillTable()
    {
     try{
    
       if (this.id)
       {
        await this.SCLEgalHolidayService.list(this.id).subscribe(
          (data:any)=>
          {      
            this.employee_List_TBLShamelSCLegalHoliday=data;  
            this.dataSource.data =this.employee_List_TBLShamelSCLegalHoliday;     
          }
        );
       }
  
  
  
     }catch(ex :any){}
  
  
    }
  
  
    
  
  
  
  
  
  
  Add(): void {
  
    this.selected_employee_ShamelSCLegalHoliday =  {  };
  
  
    const dialogRef = this.dialog.open(TBLShamelSCLEgalHolidayAddComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_ShamelSCLegalHoliday,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }
  
  
  async Delete(element:TBLShamelSCLegalHoliday)
  {
    
  try{
      const dialogRef = this.dialog.open(ConfirmationdialogComponent,{
        data:{
          message: 'هل أنت متأكد من الحذف?',
          buttonText: {
            ok: 'نعم',
            cancel: 'لا'
          }
        }
      });
  
      
  
      dialogRef.afterClosed().toPromise().then((confirmed: boolean) => {
        if (confirmed) {
     
          const snack = this.snackBar.open('سوف يتم الآن الحذف');
         
  
  if (element.serial)
  {
    this.SCLEgalHolidayService.delete(element.serial).toPromise().then(res=> 
      {
        snack.dismiss();
  
        console.log(res);
        if (res==1)
          this.FillTable();
  
      });
      this.snackBar.open('تم الحذف', 'Fechar', {
        duration: 2000,
      });
  
      this.snackBar.dismiss();
  }
    
  
         
        }
      });
  }catch(ex:any)  
  {
  
  }
  
  }
  
  
  async Update(element:TBLShamelSCLegalHoliday)
  {
    if (element)
    {
      this.selected_employee_ShamelSCLegalHoliday = element;
  
      const dialogRef = this.dialog.open(TBLShamelSCLEgalHolidayAddComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_ShamelSCLegalHoliday,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });
  
    }
  
  
  }
  
  
  
  
  }
  