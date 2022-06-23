import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TBLShamelSCSuddenHoliday } from '../../../../shared/models/employees_department/TBLShamelSCSuddenHoliday';
import { TBLShamelSCSuddenHolidayService } from '../../../../shared/services/employees_department/tblshamel-sc-sudden-holiday.service';
import { TBLShamelSuddenHolidayService } from '../../../../shared/services/employees_department/tblshamel-sudden-holiday.service';
import { ConfirmationdialogComponent } from '../../common/confirmationdialog/confirmationdialog.component';
import { TBLShamelSCSuddenHolidayAddComponent } from '../tblshamel-sc-sudden-holiday-add/tblshamel-sc-sudden-holiday-add.component';

@Component({
  selector: 'app-tblshamel-sc-sudden-holiday-list',
  templateUrl: './tblshamel-sc-sudden-holiday-list.component.html',
  styleUrls: ['./tblshamel-sc-sudden-holiday-list.component.scss']
})
export class TBLShamelSCSuddenHolidayListComponent implements OnInit {
//Join Variable   
@Input() id:number;
  
// List For Table
employee_SuddenHoliday_List :TBLShamelSCSuddenHoliday []=[];
selected_employee_SuddenHoliday :TBLShamelSCSuddenHoliday;
displayedColumns: string[] = ['duration', 'startdate', 'enddate','suddenholiday_id','notes','documenttype_id', 'document_number',
                              'documentdate','action'];

dataSource : MatTableDataSource<TBLShamelSCSuddenHoliday> = new  MatTableDataSource<TBLShamelSCSuddenHoliday>([]);


constructor(
  public ShamelSCSuddenHolidayService : TBLShamelSCSuddenHolidayService,
  public ShamelSuddenHolidayService : TBLShamelSuddenHolidayService,
  public dialog: MatDialog,
  private snackBar: MatSnackBar) {
    this.employee_SuddenHoliday_List =[];
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
    console.log('Fill Table ID = ' + this.id); 

     if (this.id)
     {
      await this.ShamelSCSuddenHolidayService.list(this.id).subscribe(
        (data:any)=>
        {      
          this.employee_SuddenHoliday_List=data;  
          this.dataSource.data =this.employee_SuddenHoliday_List;     
        }
      );
     }



   }catch(ex :any){}


  }


  






Add(): void {

  this.selected_employee_SuddenHoliday =  {  };


  const dialogRef = this.dialog.open(TBLShamelSCSuddenHolidayAddComponent, {
    height: '60%',
    width: '80%',
    data: {obj: this.selected_employee_SuddenHoliday,id:this.id}
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
  this.ShamelSCSuddenHolidayService.delete(element.serial).toPromise().then(res=> 
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
    this.selected_employee_SuddenHoliday = element;

    const dialogRef = this.dialog.open(TBLShamelSCSuddenHolidayAddComponent, {
      height: '60%',
      width: '80%',
      data: {obj: this.selected_employee_SuddenHoliday,id:this.id}
    });

    dialogRef.afterClosed().toPromise().then(result => {
      this.FillTable();        
    });

  }


}




}
