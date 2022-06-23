import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TBLShamelSCMergeService } from '../../../../shared/models/employees_department/TBLShamelSCMergeService';
import { TBLShamelSCSuddenHoliday } from '../../../../shared/models/employees_department/TBLShamelSCSuddenHoliday';
import { TBLShamelSCMergeServiceService } from '../../../../shared/services/employees_department/tblshamel-sc-merge-service.service';
import { TBLShamelSCSuddenHolidayService } from '../../../../shared/services/employees_department/tblshamel-sc-sudden-holiday.service';
import { TBLShamelSuddenHolidayService } from '../../../../shared/services/employees_department/tblshamel-sudden-holiday.service';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { TBLShamelSCSuddenHolidayAddComponent } from '../../tblshamelscsuddenholiday/tblshamel-sc-sudden-holiday-add/tblshamel-sc-sudden-holiday-add.component';

@Component({
  selector: 'app-tblshamelscmergeservice-list',
  templateUrl: './tblshamelscmergeservice-list.component.html',
  styleUrls: ['./tblshamelscmergeservice-list.component.scss']
})
export class TblshamelscmergeserviceListComponent implements OnInit {
  //Join Variable   
  @Input() id:number;
    
  // List For Table
  employee_List_TBLShamelSCMergeService :TBLShamelSCMergeService []=[];
  selected_employee_MergeService :TBLShamelSCMergeService;
  displayedColumns: string[] = ['years', 'months', 'days','mergeservicereason_id','documenttype_id','document_number', 'documentdate','action'];
  
  dataSource : MatTableDataSource<TBLShamelSCMergeService> = new  MatTableDataSource<TBLShamelSCMergeService>([]);

  
  constructor(
    public SCMergeServiceService : TBLShamelSCMergeServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.employee_List_TBLShamelSCMergeService =[];
      this.FillTable();
     }
  
     ngAfterViewInit() {
  
      
    }
  
  ngOnChanges() {
    console.log("ngOnChanges Eduction");
    console.log(this.id);
    this.FillTable();
   }
  
   
  ngOnInit(): void {
  }
  
  
  
    public async FillTable()
    {
     try{
    
       if (this.id)
       {
        await this.SCMergeServiceService.list(this.id).subscribe(
          (data:any)=>
          {      
            this.employee_List_TBLShamelSCMergeService=data;  
            this.dataSource.data =this.employee_List_TBLShamelSCMergeService;     
          }
        );
       }
  
  
  
     }catch(ex :any){}
  
  
    }
  
  
    
  
  
  
  
  
  
  Add(): void {
  
    this.selected_employee_MergeService =  {  };
  
  
    const dialogRef = this.dialog.open(TBLShamelSCSuddenHolidayAddComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_MergeService,id:this.id}
    });
   
    dialogRef.afterClosed().toPromise().then(result => {
     
      this.FillTable();
      
    });
  }
  
  
  async Delete(element:TBLShamelSCSuddenHoliday)
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
    this.SCMergeServiceService.delete(element.serial).toPromise().then(res=> 
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
  
  
  async Update(element:TBLShamelSCSuddenHoliday)
  {
    if (element)
    {
      this.selected_employee_MergeService = element;
  
      const dialogRef = this.dialog.open(TBLShamelSCSuddenHolidayAddComponent, {
        height: '60%',
        width: '80%',
        data: {obj: this.selected_employee_MergeService,id:this.id}
      });
  
      dialogRef.afterClosed().toPromise().then(result => {
        this.FillTable();        
      });
  
    }
  
  
  }
  
  
  
  
  }
  